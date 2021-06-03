var list = new Array();
$('.sync-pagination').twbsPagination({
        totalPages: 10,
        visiblePages: 4,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (evt, page) {
            loadpage();
            $('#content').text('Page ' + list[page]);
        }
    });

function loadpage() {
    $.getJSON('../resources/pageination_example.json', function (data) {
        list = data.content;
    }).error(function(){
            console.log('error: json not loaded');
        });
    });
}
