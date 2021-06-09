/**
 * This Script deals with translations for the site.
 * It contains functions to hide/show language based content and
 * to set cookies to save language preference.
 */


window.onload = window_load;

function window_load(){
    let language = get_language_selected();
    if (typeof language == "string")
        change_page(language);
}

/**
 * Change the layout of the page for the provided language and save the preference as a cookie
 * @param {*} language The language as an abbreviated string. Currently accepted ger en
 */
function change_page(language) {
    if (language === 'en') {
        document.getElementById('en_page').style.display='block';
        document.getElementById('ger_page').style.display='none';
        set_language_selected("en");
    } else if (language === 'ger') {
        document.getElementById('ger_page').style.display='block';
        document.getElementById('en_page').style.display='none';
        set_language_selected("ger");
    } else { // Edge case of bad language selection
        console.log("This should not happen");
    }
}

function change_page_content(language) {
    //Change page cookie to english
    change_page(language);
    // Reload for now
    location.reload();
}

/**
 * Returns the abbrveations tring for the language that is saved in the cookie.
 * TODO Better Return value if cookir doesn't exist.
 */
function get_language_selected(){
    let cookie = JSON.parse(getCookie("lang"));
    console.log(JSON.stringify(cookie));
    return cookie["selection"];
}

/**
 * Set the cookie to the current language selection
 * @param {*} language 
 */
function set_language_selected(language){
    console.log("Set language to: " + language);
    deleteCookie("lang");
    setCookie("lang", JSON.stringify({"selection": language}), 356);
}

/**
 * Sets a cookie with the name cname the value_c_value with expriation date exdays.
 * @param {*} cname 
 * @param {*} cvalue 
 * @param {*} exdays 
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
}

/**
 * Returns the cookie with name cname as a string.
 * @param {*} cname 
 */
function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
}
return "";
}

/**
 * Deletes the cookie with name cname.
 */
function deleteCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
