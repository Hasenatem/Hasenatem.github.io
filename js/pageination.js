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
    let url_string = "https://hasenatem.github.io/resources/" + name + ".json";
    console.log(url_string)
    await load_content(url_string).then(data => content_list = data.content);
    console.log(content_list)
    await $('.sync-pagination').twbsPagination({
        totalPages: 10,
        visiblePages: 4,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (evt, page) {
            console.log("Added onclick function")
            $('#content').text('Page ' + content_list[page-1]);
        }
    });

}


$(document).ready(do_start())


