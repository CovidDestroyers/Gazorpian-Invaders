(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "Cu65":
/*!*********************************!*\
  !*** ./public/js/auth/login.js ***!
  \*********************************/
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
  var userName = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('username');
  var password = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('password');

  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(userName === '' || password === '')) {
              _context.next = 7;
              break;
            }

            userName = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('username');
            password = Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["getInputValue"])('password'); // eslint-disable-next-line no-await-in-loop

            _context.next = 5;
            return new Promise(function (resolve) {
              setTimeout(resolve, 1000);
            });

          case 5:
            _context.next = 0;
            break;

          case 7:
            return _context.abrupt("return", $('#loginBtn').removeAttr('disabled'));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();

  $('#loginBtn').click( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var backEndResponse, status;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.prev = 1;
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addSpinner"])('loginBtn');
              _context2.next = 5;
              return Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["postLoginData"])('/auth/login');

            case 5:
              backEndResponse = _context2.sent;
              console.log(backEndResponse);
              status = backEndResponse.data.status;

              if (status !== 'success') {
                Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addWarningAlert"])('loginForm', status);
              } else {
                $('#signup').prop('hidden', true);
                $('#login').prop('hidden', true);
                $('#logout').removeAttr('hidden');
                $('#loginClose').click();
              }

              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["replaceContent"])('loginBtn', 'Sign Up');
              $('#username').val('');
              $('#password').val(''); // hide signup button
              // display username => 'Welcome username'

              _context2.next = 19;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["replaceContent"])('loginBtn', 'Login');
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addFailureAlert"])('loginForm');

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 14]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ })

},[["Cu65","runtime","npm.babel","npm.regenerator-runtime","login~shared~signup"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyIkIiwidXNlck5hbWUiLCJnZXRJbnB1dFZhbHVlIiwicGFzc3dvcmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkU3Bpbm5lciIsInBvc3RMb2dpbkRhdGEiLCJiYWNrRW5kUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGF0YSIsImFkZFdhcm5pbmdBbGVydCIsInByb3AiLCJyZXBsYWNlQ29udGVudCIsInZhbCIsImFkZEZhaWx1cmVBbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBU0FBLENBQUMsQ0FBQyxZQUFNO0FBQ04sTUFBSUMsUUFBUSxHQUFHQyxnRUFBYSxDQUFDLFVBQUQsQ0FBNUI7QUFDQSxNQUFJQyxRQUFRLEdBQUdELGdFQUFhLENBQUMsVUFBRCxDQUE1Qjs7QUFFQSx1SEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1FELFFBQVEsS0FBSyxFQUFiLElBQW1CRSxRQUFRLEtBQUssRUFEeEM7QUFBQTtBQUFBO0FBQUE7O0FBRUdGLG9CQUFRLEdBQUdDLGdFQUFhLENBQUMsVUFBRCxDQUF4QjtBQUNBQyxvQkFBUSxHQUFHRCxnRUFBYSxDQUFDLFVBQUQsQ0FBeEIsQ0FISCxDQUlHOztBQUpIO0FBQUEsbUJBS1MsSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM3QkMsd0JBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBVjtBQUNELGFBRkssQ0FMVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FVUUwsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlTyxVQUFmLENBQTBCLFVBQTFCLENBVlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFhQVAsR0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlUSxLQUFmO0FBQUEscUlBQXFCLGtCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsbUJBQUssQ0FBQ0MsY0FBTjtBQURtQjtBQUlqQkMsMkVBQVUsQ0FBQyxVQUFELENBQVY7QUFKaUI7QUFBQSxxQkFNYUMsZ0VBQWEsQ0FBQyxhQUFELENBTjFCOztBQUFBO0FBTVhDLDZCQU5XO0FBT2pCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLGVBQVo7QUFFUUcsb0JBVFMsR0FTRUgsZUFBZSxDQUFDSSxJQVRsQixDQVNURCxNQVRTOztBQVdqQixrQkFBSUEsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJFLGtGQUFlLENBQUMsV0FBRCxFQUFjRixNQUFkLENBQWY7QUFDRCxlQUZELE1BRU87QUFDTGhCLGlCQUFDLENBQUMsU0FBRCxDQUFELENBQWFtQixJQUFiLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCO0FBQ0FuQixpQkFBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZbUIsSUFBWixDQUFpQixRQUFqQixFQUEyQixJQUEzQjtBQUNBbkIsaUJBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYU8sVUFBYixDQUF3QixRQUF4QjtBQUNBUCxpQkFBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlEsS0FBakI7QUFDRDs7QUFFRFksK0VBQWMsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFkO0FBRUFwQixlQUFDLENBQUMsV0FBRCxDQUFELENBQWVxQixHQUFmLENBQW1CLEVBQW5CO0FBQ0FyQixlQUFDLENBQUMsV0FBRCxDQUFELENBQWVxQixHQUFmLENBQW1CLEVBQW5CLEVBdkJpQixDQXdCakI7QUFDQTs7QUF6QmlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBMkJqQlAscUJBQU8sQ0FBQ0MsR0FBUjtBQUVBSywrRUFBYyxDQUFDLFVBQUQsRUFBYSxPQUFiLENBQWQ7QUFDQUUsZ0ZBQWUsQ0FBQyxXQUFELENBQWY7O0FBOUJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDRCxDQWxEQSxDQUFELEMiLCJmaWxlIjoibG9naW4uNjg3NjIxMzg0NTg1MDQ2ZjNjMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucywgbm8tdW5kZWYgKi9cbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzJztcblxuaW1wb3J0IHtcbiAgZ2V0SW5wdXRWYWx1ZSxcbiAgcG9zdExvZ2luRGF0YSxcbiAgYWRkRmFpbHVyZUFsZXJ0LFxuICBhZGRTcGlubmVyLFxuICByZXBsYWNlQ29udGVudCxcbiAgYWRkV2FybmluZ0FsZXJ0XG59IGZyb20gJy4vYXV0aE1lLmpzJztcblxuJCgoKSA9PiB7XG4gIGxldCB1c2VyTmFtZSA9IGdldElucHV0VmFsdWUoJ3VzZXJuYW1lJyk7XG4gIGxldCBwYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ3Bhc3N3b3JkJyk7XG5cbiAgKGFzeW5jICgpID0+IHtcbiAgICB3aGlsZSAodXNlck5hbWUgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgdXNlck5hbWUgPSBnZXRJbnB1dFZhbHVlKCd1c2VybmFtZScpO1xuICAgICAgcGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdwYXNzd29yZCcpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJCgnI2xvZ2luQnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgfSkoKTtcblxuICAkKCcjbG9naW5CdG4nKS5jbGljayhhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGFkZFNwaW5uZXIoJ2xvZ2luQnRuJyk7XG5cbiAgICAgIGNvbnN0IGJhY2tFbmRSZXNwb25zZSA9IGF3YWl0IHBvc3RMb2dpbkRhdGEoJy9hdXRoL2xvZ2luJyk7XG4gICAgICBjb25zb2xlLmxvZyhiYWNrRW5kUmVzcG9uc2UpO1xuXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gYmFja0VuZFJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIGlmIChzdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgICAgICBhZGRXYXJuaW5nQWxlcnQoJ2xvZ2luRm9ybScsIHN0YXR1cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc2lnbnVwJykucHJvcCgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICQoJyNsb2dpbicpLnByb3AoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICAkKCcjbG9nb3V0JykucmVtb3ZlQXR0cignaGlkZGVuJyk7XG4gICAgICAgICQoJyNsb2dpbkNsb3NlJykuY2xpY2soKTtcbiAgICAgIH1cblxuICAgICAgcmVwbGFjZUNvbnRlbnQoJ2xvZ2luQnRuJywgJ1NpZ24gVXAnKTtcblxuICAgICAgJCgnI3VzZXJuYW1lJykudmFsKCcnKTtcbiAgICAgICQoJyNwYXNzd29yZCcpLnZhbCgnJyk7XG4gICAgICAvLyBoaWRlIHNpZ251cCBidXR0b25cbiAgICAgIC8vIGRpc3BsYXkgdXNlcm5hbWUgPT4gJ1dlbGNvbWUgdXNlcm5hbWUnXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgcmVwbGFjZUNvbnRlbnQoJ2xvZ2luQnRuJywgJ0xvZ2luJyk7XG4gICAgICBhZGRGYWlsdXJlQWxlcnQoJ2xvZ2luRm9ybScpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=