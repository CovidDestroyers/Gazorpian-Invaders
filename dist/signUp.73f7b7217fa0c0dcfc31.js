(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signUp"],{

/***/ "k+zK":
/*!**********************************!*\
  !*** ./public/js/auth/signUp.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "ls82");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authMe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authMe.js */ "jSCX");


/* eslint-disable import/extensions, no-undef */


$(document).ready(function () {
  var signupUserName = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('new-username');
  var signupPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('signup-password');
  var confirmPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('confirm-password');

  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(signupUserName === '' || signupPassword === '' || confirmPassword === '')) {
              _context.next = 8;
              break;
            }

            signupUserName = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('new-username');
            signupPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('signup-password');
            confirmPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('confirm-password'); // eslint-disable-next-line no-await-in-loop

            _context.next = 6;
            return new Promise(function (resolve) {
              setTimeout(resolve, 1000);
            });

          case 6:
            _context.next = 0;
            break;

          case 8:
            return _context.abrupt("return", $('#signupBtn').removeAttr('disabled'));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();

  $('#signupBtn').click( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              /*
                  Steps:
                  1. Get the input values for username, password, confirm password
                  2. Make sure password and confirm password are the same
                  3.
               */

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ })

},[["k+zK","runtime","npm.regenerator-runtime","npm.babel","shared~signUp"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9zaWduVXAuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzaWdudXBVc2VyTmFtZSIsImdldElucHV0VmFsdWUiLCJzaWdudXBQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHIiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQU07QUFDdEIsTUFBSUMsY0FBYyxHQUFHQyxnRUFBYSxDQUFDLGNBQUQsQ0FBbEM7QUFDQSxNQUFJQyxjQUFjLEdBQUdELGdFQUFhLENBQUMsaUJBQUQsQ0FBbEM7QUFDQSxNQUFJRSxlQUFlLEdBQUdGLGdFQUFhLENBQUMsa0JBQUQsQ0FBbkM7O0FBRUEsdUhBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNRRCxjQUFjLEtBQUssRUFBbkIsSUFBeUJFLGNBQWMsS0FBSyxFQUE1QyxJQUFrREMsZUFBZSxLQUFLLEVBRDlFO0FBQUE7QUFBQTtBQUFBOztBQUVHSCwwQkFBYyxHQUFHQyxnRUFBYSxDQUFDLGNBQUQsQ0FBOUI7QUFDQUMsMEJBQWMsR0FBR0QsZ0VBQWEsQ0FBQyxpQkFBRCxDQUE5QjtBQUNBRSwyQkFBZSxHQUFHRixnRUFBYSxDQUFDLGtCQUFELENBQS9CLENBSkgsQ0FLRzs7QUFMSDtBQUFBLG1CQU1TLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDN0JDLHdCQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQVY7QUFDRCxhQUZLLENBTlQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBV1FSLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JVLFVBQWhCLENBQTJCLFVBQTNCLENBWFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFjQVYsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlcsS0FBaEI7QUFBQSxxSUFBc0Isa0JBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkEsbUJBQUssQ0FBQ0MsY0FBTjtBQUNBOzs7Ozs7O0FBRm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0QsQ0E1QkQsRSIsImZpbGUiOiJzaWduVXAuNzNmN2I3MjE3ZmEwYzBkY2ZjMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucywgbm8tdW5kZWYgKi9cbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzJztcblxuaW1wb3J0IHsgZ2V0SW5wdXRWYWx1ZSB9IGZyb20gJy4vYXV0aE1lLmpzJztcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICBsZXQgc2lnbnVwVXNlck5hbWUgPSBnZXRJbnB1dFZhbHVlKCduZXctdXNlcm5hbWUnKTtcbiAgbGV0IHNpZ251cFBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnc2lnbnVwLXBhc3N3b3JkJyk7XG4gIGxldCBjb25maXJtUGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdjb25maXJtLXBhc3N3b3JkJyk7XG5cbiAgKGFzeW5jICgpID0+IHtcbiAgICB3aGlsZSAoc2lnbnVwVXNlck5hbWUgPT09ICcnIHx8IHNpZ251cFBhc3N3b3JkID09PSAnJyB8fCBjb25maXJtUGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBzaWdudXBVc2VyTmFtZSA9IGdldElucHV0VmFsdWUoJ25ldy11c2VybmFtZScpO1xuICAgICAgc2lnbnVwUGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdzaWdudXAtcGFzc3dvcmQnKTtcbiAgICAgIGNvbmZpcm1QYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ2NvbmZpcm0tcGFzc3dvcmQnKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQoJyNzaWdudXBCdG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICB9KSgpO1xuXG4gICQoJyNzaWdudXBCdG4nKS5jbGljayhhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8qXG4gICAgICAgIFN0ZXBzOlxuICAgICAgICAxLiBHZXQgdGhlIGlucHV0IHZhbHVlcyBmb3IgdXNlcm5hbWUsIHBhc3N3b3JkLCBjb25maXJtIHBhc3N3b3JkXG4gICAgICAgIDIuIE1ha2Ugc3VyZSBwYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBhcmUgdGhlIHNhbWVcbiAgICAgICAgMy5cbiAgICAgKi9cbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=