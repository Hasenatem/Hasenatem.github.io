$(document).ready(function () {
    console.log("Hey. started stuff.")
    var content = [];
    loadpage();
    console.log("Hey these functions were done");
    console.log(content);
   $('.sync-pagination').twbsPagination({
        totalPages: 10,
        visiblePages: 4,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (evt, page) {
            console.log("Added onclick function")
            $('#content').text('Page ' + page);
        }
    });

    function loadpage() {
        $.getJSON('https://hasenatem.github.io/resources/pageination_example.json', function (data) {
            content = data;
        });
    }
});
