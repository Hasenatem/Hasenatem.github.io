// On load of the page, get every collapsible and generate click events
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    //Add a click listener which toggles the sibling block as either none or block of the clicked collapsible
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        // Get sbiling div
        var content = this.nextElementSibling;
        // Get the actual content (i.e. iframes)
        var iframe = content.firstElementChild;
        if (content.style.display === "block") {
            content.style.display = "none";
            // "Reload" the content (i.e. reload the page so it gets reset on pause) Need to find out how to pause that
            // Audiostream if even possible (probably not, since we do not have any permission to meddle with the cross
            // origin website
            iframe.src += "";
        } else {
            content.style.display = "block";
        }
    });
}