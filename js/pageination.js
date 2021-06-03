

let css = document.createElement("link");
css.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css");
css.setAttribute("async", "false");

let jquery = document.createElement("script");
jquery.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js");
jquery.setAttribute("async", "false");

let bootstrap = document.createElement("script");
bootstrap.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js");
bootstrap.setAttribute("async", "false");

let pagination = document.createElement("script");
pagination.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.1/jquery.twbsPagination.min.js");
pagination.setAttribute("async", "false");

let head = document.head;
head.insertBefore(pagination, head.firstElementChild);
head.insertBefore(bootstrap, head.firstElementChild);
head.insertBefore(jquery, head.firstElementChild);
head.insertBefore(css, head.firstElementChild);

$('.sync-pagination').twbsPagination({
        totalPages: 10,
        visiblePages: 4,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (evt, page) {
            $('#content').text('Page ' + page);
        }
    });
