export class KnpPagination {
    static render({
        current,
        currentItemCount,
        endPage,
        first,
        firstItemNumber,
        firstPageInRange,
        last,
        lastItemNumber,
        lastPageInRange,
        next,
        numItemsPerPage,
        pageCount,
        pageRange,
        pagesInRange,
        startPage,
        totalCount,
        previous
    }, route, paginationContainer) {
        let paginationContainerEl = document.getElementById(paginationContainer);
        let ul = document.createElement('ul');

        ul.classList.add('pagination');

        if (previous) {
            let li = document.createElement('li');
            let href = route + '?page=' + previous;

            li.innerHTML = `<a href="${href}">&laquo;&nbsp;</a>`;
            ul.appendChild(li);
        } else {
            let li = document.createElement('li');

            li.classList.add('disabled');
            li.innerHTML = '<span>&laquo;&nbsp;</span>';

            ul.appendChild(li);
        }

        if (startPage > 1) {
            let li = document.createElement('li');
            let href = route + '?page=' + 1;

            li.innerHTML = `<a href="${href}">1</a>`;
            ul.appendChild(li);

            if (startPage === 3) {
                let li = document.createElement('li');
                let href = route + '?page=' + 2;

                li.innerHTML = `<a href="${href}">1</a>`;
                ul.appendChild(li);
            } else {
                let li = document.createElement('li');

                li.classList.add('disabled');
                li.innerHTML = '<span>&hellip;</span>';
                ul.appendChild(li);
            }
        }

        for (let i = 0; i < pagesInRange.length; i++) {
            let page = pagesInRange[i];

            if (page !== current) {
                let li = document.createElement('li');
                let href = route + '?page=' + page;

                li.innerHTML = `<a href="${href}">${page}</a>`;
                ul.appendChild(li);
            } else {
                let li = document.createElement('li');

                li.classList.add('active');
                li.innerHTML = '<span>' + page + '</span>';
                ul.appendChild(li);
            }
        }

        if (pageCount > endPage) {
            if (pageCount > (endPage + 2)) {
                let li = document.createElement('li');

                li.classList.add('disabled');
                li.innerHTML = '<span>&hellip;</span>';
                ul.appendChild(li);
            } else {
                let li = document.createElement('li');
                let href = route + '?page=' + (pageCount - 1);

                li.innerHTML = `<a href="${href}">${pageCount - 1}</a>`;
                ul.appendChild(li);
            }

            let li = document.createElement('li');
            let href = route + '?page=' + (pageCount);

            li.innerHTML = `<a href="${href}">${pageCount}</a>`;
            ul.appendChild(li);
        }

        if (next) {
            let li = document.createElement('li');
            let href = route + '?page=' + next;

            li.innerHTML = `<a href="${href}">&nbsp;&raquo;</a>`;
            ul.appendChild(li);
        } else {
            let li = document.createElement('li');

            li.classList.add('disabled');
            li.innerHTML = '<span>&nbsp;&raquo;</span>';
            ul.appendChild(li);
        }

        paginationContainerEl.appendChild(ul);
    }
}
