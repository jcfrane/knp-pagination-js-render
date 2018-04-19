(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KnpPagination = undefined;

var _knpPagination = __webpack_require__(1);

exports.KnpPagination = _knpPagination.KnpPagination;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KnpPagination = exports.KnpPagination = function () {
    function KnpPagination() {
        _classCallCheck(this, KnpPagination);
    }

    _createClass(KnpPagination, null, [{
        key: 'render',
        value: function render(_ref, route, paginationContainer) {
            var current = _ref.current,
                currentItemCount = _ref.currentItemCount,
                endPage = _ref.endPage,
                first = _ref.first,
                firstItemNumber = _ref.firstItemNumber,
                firstPageInRange = _ref.firstPageInRange,
                last = _ref.last,
                lastItemNumber = _ref.lastItemNumber,
                lastPageInRange = _ref.lastPageInRange,
                next = _ref.next,
                numItemsPerPage = _ref.numItemsPerPage,
                pageCount = _ref.pageCount,
                pageRange = _ref.pageRange,
                pagesInRange = _ref.pagesInRange,
                startPage = _ref.startPage,
                totalCount = _ref.totalCount,
                previous = _ref.previous;

            var paginationContainerEl = document.getElementById(paginationContainer);
            var ul = document.createElement('ul');

            ul.classList.add('pagination');

            if (previous) {
                var li = document.createElement('li');
                var href = route + '?page=' + previous;

                li.innerHTML = '<a href="' + href + '">&laquo;&nbsp;</a>';
                ul.appendChild(li);
            } else {
                var _li = document.createElement('li');

                _li.classList.add('disabled');
                _li.innerHTML = '<span>&laquo;&nbsp;</span>';

                ul.appendChild(_li);
            }

            if (startPage > 1) {
                var _li2 = document.createElement('li');
                var _href = route + '?page=' + 1;

                _li2.innerHTML = '<a href="' + _href + '">1</a>';
                ul.appendChild(_li2);

                if (startPage === 3) {
                    var _li3 = document.createElement('li');
                    var _href2 = route + '?page=' + 2;

                    _li3.innerHTML = '<a href="' + _href2 + '">1</a>';
                    ul.appendChild(_li3);
                } else {
                    var _li4 = document.createElement('li');

                    _li4.classList.add('disabled');
                    _li4.innerHTML = '<span>&hellip;</span>';
                    ul.appendChild(_li4);
                }
            }

            for (var i = 0; i < pagesInRange.length; i++) {
                var page = pagesInRange[i];

                if (page !== current) {
                    var _li5 = document.createElement('li');
                    var _href3 = route + '?page=' + page;

                    _li5.innerHTML = '<a href="' + _href3 + '">' + page + '</a>';
                    ul.appendChild(_li5);
                } else {
                    var _li6 = document.createElement('li');

                    _li6.classList.add('active');
                    _li6.innerHTML = '<span>' + page + '</span>';
                    ul.appendChild(_li6);
                }
            }

            if (pageCount > endPage) {
                if (pageCount > endPage + 2) {
                    var _li8 = document.createElement('li');

                    _li8.classList.add('disabled');
                    _li8.innerHTML = '<span>&hellip;</span>';
                    ul.appendChild(_li8);
                } else {
                    var _li9 = document.createElement('li');
                    var _href5 = route + '?page=' + (pageCount - 1);

                    _li9.innerHTML = '<a href="' + _href5 + '">' + (pageCount - 1) + '</a>';
                    ul.appendChild(_li9);
                }

                var _li7 = document.createElement('li');
                var _href4 = route + '?page=' + pageCount;

                _li7.innerHTML = '<a href="' + _href4 + '">' + pageCount + '</a>';
                ul.appendChild(_li7);
            }

            if (next) {
                var _li10 = document.createElement('li');
                var _href6 = route + '?page=' + next;

                _li10.innerHTML = '<a href="' + _href6 + '">&nbsp;&raquo;</a>';
                ul.appendChild(_li10);
            } else {
                var _li11 = document.createElement('li');

                _li11.classList.add('disabled');
                _li11.innerHTML = '<span>&nbsp;&raquo;</span>';
                ul.appendChild(_li11);
            }

            paginationContainerEl.appendChild(ul);
        }
    }]);

    return KnpPagination;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=knp-pagination-render.js.map