$('.sync-pagination').twbsPagination({
        totalPages: 10,
        visiblePages: 4,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (evt, page) {
            $('#content').text('Page ' + page);
        }
    });
