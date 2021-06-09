async function load_content(url) {
    //Wait for the fetch
    let response = await fetch(url);
    // Wait for the response
    let content = await response.json();
    // finally return the data
    return content;
}

// Asynchronous do start function which gets loaded on document ready, first loads content asynchronous, then adds
// The onclick functions for each page
async function do_start(){
    let content_list = [];
    // Get name of the page
    let href = document.location.href;
    let lastSegment = href.substr(href.lastIndexOf('/') +1);
    let name = lastSegment.split(".")[0]
    //Thus checks and potentially sets the cookie for the page
    await check_cookie(name);
    // Load json from url (Has to be the same name, as the page; naming convention)
    let url_string = "https://hasenatem.github.io/resources/stories/" + name + ".json";
    console.log(url_string)
    const language = await get_language_selected();
    let current_content = "content_" + language;
    await load_content(url_string).then(data => content_list = data[current_content]);
    console.log(content_list)
    await $('.sync-pagination').twbsPagination({
        totalPages: content_list.length,
        visiblePages: 8,
        next: 'Next',
        prev: 'Prev',
        hideOnlyOnePage: true,
        initiateStartPageClick: true,
        startPage: await parseInt(get_cookie(name)),
        onPageClick: function (evt, page) {
            console.log("Added onclick function")
            $('#content').text(content_list[page-1]);
            set_cookie(name, page, 365);
        }
    });

}

function get_cookie(cname){
    let name = cname + "=";
    //Decode the document cookies
    let decoded = decodeURIComponent(document.cookie);
    let cookies = decoded.split(";");
    //Iterate over cookies
    for(let i=0; i<cookies.length; i++){
        let current = cookies[i];
        // Check all cookies
        while (current.charAt(0) === " "){
            current = current.substring(1)
        }
        // If cookie is found
        if (current.indexOf(name) === 0){
            //Return it
            return current.substring(name.length, current.length);
        }
    }
return "";
}

function check_cookie(cname){
    // Checks if a cookie is set already, if not, set it to 1
    let cookie = get_cookie(cname);
    // If no cookie is set already, just set it to 1
    if (cookie !== "") {
        return true;
    } else {
        set_cookie(cname, 1, 365);
        return true;
    }
}

function set_cookie(cname, value, expiration){
    // If cookie already exists
    //Get current time and add expiration amount of days
    var current = new Date();
    current.setTime(current.getTime() + (expiration*24*60*60*1000));
    var expiration_string = "expires="+ current.toUTCString();
    document.cookie = cname+"="+value+";"+expiration+";path=/;SameSite=Lax";
}

$(document).ready(do_start())


