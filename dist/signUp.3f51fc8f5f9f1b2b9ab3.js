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


$(function () {
  var signupUserName = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('newUserName');
  var signupPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('signupPassword');
  var confirmPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('confirmPassword');

  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(signupUserName === '' || signupPassword === '' || confirmPassword === '')) {
              _context.next = 8;
              break;
            }

            signupUserName = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('newUserName');
            signupPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('signupPassword');
            confirmPassword = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('confirmPassword'); // eslint-disable-next-line no-await-in-loop

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
      var backEndResponse;
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

              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addSpinner"])('signupBtn');
              _context2.prev = 2;
              _context2.next = 5;
              return Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["postSignUpData"])('/auth/signup');

            case 5:
              backEndResponse = _context2.sent;
              console.log(backEndResponse); // const { status } = backEndResponse.data;

              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addFailureAlert"])('signupForm');

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ })

},[["k+zK","runtime","npm.babel","npm.regenerator-runtime","shared~signUp"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9zaWduVXAuanMiXSwibmFtZXMiOlsiJCIsInNpZ251cFVzZXJOYW1lIiwiZ2V0SW5wdXRWYWx1ZSIsInNpZ251cFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0ciIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFNwaW5uZXIiLCJwb3N0U2lnblVwRGF0YSIsImJhY2tFbmRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRGYWlsdXJlQWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQU9BQSxDQUFDLENBQUMsWUFBTTtBQUNOLE1BQUlDLGNBQWMsR0FBR0MsZ0VBQWEsQ0FBQyxhQUFELENBQWxDO0FBQ0EsTUFBSUMsY0FBYyxHQUFHRCxnRUFBYSxDQUFDLGdCQUFELENBQWxDO0FBQ0EsTUFBSUUsZUFBZSxHQUFHRixnRUFBYSxDQUFDLGlCQUFELENBQW5DOztBQUVBLHVIQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFFR0QsY0FBYyxLQUFLLEVBQW5CLElBQ0FFLGNBQWMsS0FBSyxFQURuQixJQUVBQyxlQUFlLEtBQUssRUFKdkI7QUFBQTtBQUFBO0FBQUE7O0FBTUdILDBCQUFjLEdBQUdDLGdFQUFhLENBQUMsYUFBRCxDQUE5QjtBQUNBQywwQkFBYyxHQUFHRCxnRUFBYSxDQUFDLGdCQUFELENBQTlCO0FBQ0FFLDJCQUFlLEdBQUdGLGdFQUFhLENBQUMsaUJBQUQsQ0FBL0IsQ0FSSCxDQVNHOztBQVRIO0FBQUEsbUJBVVMsSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM3QkMsd0JBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBVjtBQUNELGFBRkssQ0FWVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FlUU4sQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlEsVUFBaEIsQ0FBMkIsVUFBM0IsQ0FmUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQWtCQVIsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlMsS0FBaEI7QUFBQSxxSUFBc0Isa0JBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ0E7Ozs7Ozs7QUFNQUMsMkVBQVUsQ0FBQyxXQUFELENBQVY7QUFSb0I7QUFBQTtBQUFBLHFCQVdZQyxpRUFBYyxDQUFDLGNBQUQsQ0FYMUI7O0FBQUE7QUFXWkMsNkJBWFk7QUFZbEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsZUFBWixFQVprQixDQWNsQjs7QUFka0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQmxCQyxxQkFBTyxDQUFDQyxHQUFSO0FBRUFDLGdGQUFlLENBQUMsWUFBRCxDQUFmOztBQWxCa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkQsQ0E1Q0EsQ0FBRCxDIiwiZmlsZSI6InNpZ25VcC4zZjUxZmM4ZjVmOWYxYjJiOWFiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zLCBuby11bmRlZiAqL1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMnO1xuXG5pbXBvcnQge1xuICBnZXRJbnB1dFZhbHVlLFxuICBwb3N0U2lnblVwRGF0YSxcbiAgYWRkRmFpbHVyZUFsZXJ0LFxuICBhZGRTcGlubmVyXG59IGZyb20gJy4vYXV0aE1lLmpzJztcblxuJCgoKSA9PiB7XG4gIGxldCBzaWdudXBVc2VyTmFtZSA9IGdldElucHV0VmFsdWUoJ25ld1VzZXJOYW1lJyk7XG4gIGxldCBzaWdudXBQYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ3NpZ251cFBhc3N3b3JkJyk7XG4gIGxldCBjb25maXJtUGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdjb25maXJtUGFzc3dvcmQnKTtcblxuICAoYXN5bmMgKCkgPT4ge1xuICAgIHdoaWxlIChcbiAgICAgIHNpZ251cFVzZXJOYW1lID09PSAnJyB8fFxuICAgICAgc2lnbnVwUGFzc3dvcmQgPT09ICcnIHx8XG4gICAgICBjb25maXJtUGFzc3dvcmQgPT09ICcnXG4gICAgKSB7XG4gICAgICBzaWdudXBVc2VyTmFtZSA9IGdldElucHV0VmFsdWUoJ25ld1VzZXJOYW1lJyk7XG4gICAgICBzaWdudXBQYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ3NpZ251cFBhc3N3b3JkJyk7XG4gICAgICBjb25maXJtUGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdjb25maXJtUGFzc3dvcmQnKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQoJyNzaWdudXBCdG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICB9KSgpO1xuXG4gICQoJyNzaWdudXBCdG4nKS5jbGljayhhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8qXG4gICAgICAgIFN0ZXBzOlxuICAgICAgICAxLiBHZXQgdGhlIGlucHV0IHZhbHVlcyBmb3IgdXNlcm5hbWUsIHBhc3N3b3JkLCBjb25maXJtIHBhc3N3b3JkXG4gICAgICAgIDIuIE1ha2Ugc3VyZSBwYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBhcmUgdGhlIHNhbWVcbiAgICAgICAgMy5cbiAgICAgKi9cbiAgICBhZGRTcGlubmVyKCdzaWdudXBCdG4nKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYWNrRW5kUmVzcG9uc2UgPSBhd2FpdCBwb3N0U2lnblVwRGF0YSgnL2F1dGgvc2lnbnVwJyk7XG4gICAgICBjb25zb2xlLmxvZyhiYWNrRW5kUmVzcG9uc2UpO1xuXG4gICAgICAvLyBjb25zdCB7IHN0YXR1cyB9ID0gYmFja0VuZFJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgYWRkRmFpbHVyZUFsZXJ0KCdzaWdudXBGb3JtJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==