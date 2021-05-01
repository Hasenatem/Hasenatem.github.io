window.onload = window_load;

function window_load(){
    language = get_language_selected();
    console.log("Loading language: " + language);
    change_page(language);
}

function change_page(language) {
    if (language === 'en') {
        document.getElementById('en_page').style.display='block';
        document.getElementById('ger_page').style.display='none';
        set_language_selected("en");
    } else if (language === 'ger') {
        document.getElementById('ger_page').style.display='block';
        document.getElementById('en_page').style.display='none';
        set_language_selected("ger");
    } else {
        console.log("This should not happen");
    }
}

function get_language_selected(){
    return getCookie("lang")["selection"];
}

function set_language_selected(language){
    console.log("Set language to: " + language);
    deleteCookie("lang");
    setCookie("lang", JSON.stringify({"selection": "ger"}), 356);
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
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function deleteCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}