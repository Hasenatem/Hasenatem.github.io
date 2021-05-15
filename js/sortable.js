//Author: tofsjonas
document.addEventListener("click", function (a) {
    function n(d, e) {
        d.className = d.className.replace(r, "") + e
    }

    var r = / dir-(u|d) /, b = /\bsortable\b/;
    a = a.target;
    if ("TH" === a.nodeName) try {
        var f = a.parentNode.parentNode.parentNode;
        if (b.test(f.className)) {
            var g, c = a.parentNode.cells;
            for (b = 0; b < c.length; b++) c[b] === a ? g = b : n(c[b], "");
            c = " dir-d ";
            -1 !== a.className.indexOf(" dir-d ") && (c = " dir-u ");
            n(a, c);
            var h = f.tBodies[0], k = [].slice.call(h.rows, 0), p = " dir-u " === c;
            k.sort(function (d, e) {
                var l = (p ? d : e).cells[g].innerText, m =
                    (p ? e : d).cells[g].innerText;
                return isNaN(l - m) ? l.localeCompare(m) : l - m
            });
            for (var q = h.cloneNode(); k.length;) q.appendChild(k.splice(0, 1)[0]);
            f.replaceChild(q, h)
        }
    } catch (d) {
    }
});

function filter(inp, tab) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue_1, txtValue_2;
    input = document.getElementById(inp);
    filter = input.value.toUpperCase();
    table = document.getElementById(tab);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        if (td) {
            txtValue_1 = td[0].textContent || td[0].innerText;
            txtValue_2 = td[1].textContent || td[1].innerText;
            if (txtValue_1.toUpperCase().indexOf(filter) > -1 || txtValue_2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}