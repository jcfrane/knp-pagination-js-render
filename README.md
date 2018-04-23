KNP Pagination Render JS
=========================

Render KNP Sliding Pagination Component by KNP through JS.

See: [KNP Components](https://github.com/KnpLabs/knp-components)

Usage
-----
In your HTML: 
```html
<div id="paginationContainer"></div>
```

In your Javascript:
```js
// Assign pagination data to a javascript variable.
var paginationData = JSON.parse('{{ pagination.paginationData | json_encode | raw }}');

KnpPagination.render(paginationData, 'someRouteHere', 'paginationContainer');
```

Installation
-------------
Download the build [Here](https://github.com/jcfrane/knp-pagination-render/tree/master/lib)
