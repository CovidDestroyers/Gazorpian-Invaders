(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup"],{

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
      var backEndResponse, status;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.prev = 1;
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addSpinner"])('signupBtn');
              _context2.next = 5;
              return Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["postSignUpData"])('/auth/signup');

            case 5:
              backEndResponse = _context2.sent;
              console.log(backEndResponse);
              status = backEndResponse.data.status;

              if (status !== 'success') {
                Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addWarningAlert"])('signupForm', status);
              } else {
                $('#signup').prop('hidden', true);
                $('#login').prop('hidden', true);
                $('#logout').removeAttr('hidden');
                $('#closeSignup').click();
              }

              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["replaceContent"])('signupBtn', 'Sign Up');
              $('#new-username').val('');
              $('#signup-password').val('');
              $('#confirm-password').val(''); // hide signup button
              // display username => 'Welcome username'

              _context2.next = 20;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["replaceContent"])('signupBtn', 'Sign Up');
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addFailureAlert"])('signupForm');

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ })

},[["k+zK","runtime","npm.babel","npm.regenerator-runtime","login~shared~signup"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9zaWduVXAuanMiXSwibmFtZXMiOlsiJCIsInNpZ251cFVzZXJOYW1lIiwiZ2V0SW5wdXRWYWx1ZSIsInNpZ251cFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0ciIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFNwaW5uZXIiLCJwb3N0U2lnblVwRGF0YSIsImJhY2tFbmRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJkYXRhIiwiYWRkV2FybmluZ0FsZXJ0IiwicHJvcCIsInJlcGxhY2VDb250ZW50IiwidmFsIiwiYWRkRmFpbHVyZUFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFTQUEsQ0FBQyxDQUFDLFlBQU07QUFDTixNQUFJQyxjQUFjLEdBQUdDLGdFQUFhLENBQUMsY0FBRCxDQUFsQztBQUNBLE1BQUlDLGNBQWMsR0FBR0QsZ0VBQWEsQ0FBQyxpQkFBRCxDQUFsQztBQUNBLE1BQUlFLGVBQWUsR0FBR0YsZ0VBQWEsQ0FBQyxrQkFBRCxDQUFuQzs7QUFFQSx1SEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUdELGNBQWMsS0FBSyxFQUFuQixJQUNBRSxjQUFjLEtBQUssRUFEbkIsSUFFQUMsZUFBZSxLQUFLLEVBSnZCO0FBQUE7QUFBQTtBQUFBOztBQU1HSCwwQkFBYyxHQUFHQyxnRUFBYSxDQUFDLGNBQUQsQ0FBOUI7QUFDQUMsMEJBQWMsR0FBR0QsZ0VBQWEsQ0FBQyxpQkFBRCxDQUE5QjtBQUNBRSwyQkFBZSxHQUFHRixnRUFBYSxDQUFDLGtCQUFELENBQS9CLENBUkgsQ0FTRzs7QUFUSDtBQUFBLG1CQVVTLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDN0JDLHdCQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQVY7QUFDRCxhQUZLLENBVlQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBZVFOLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JRLFVBQWhCLENBQTJCLFVBQTNCLENBZlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFrQkFSLEdBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JTLEtBQWhCO0FBQUEscUlBQXNCLGtCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkEsbUJBQUssQ0FBQ0MsY0FBTjtBQURvQjtBQUlsQkMsMkVBQVUsQ0FBQyxXQUFELENBQVY7QUFKa0I7QUFBQSxxQkFNWUMsaUVBQWMsQ0FBQyxjQUFELENBTjFCOztBQUFBO0FBTVpDLDZCQU5ZO0FBT2xCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLGVBQVo7QUFFUUcsb0JBVFUsR0FTQ0gsZUFBZSxDQUFDSSxJQVRqQixDQVNWRCxNQVRVOztBQVdsQixrQkFBSUEsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJFLGtGQUFlLENBQUMsWUFBRCxFQUFlRixNQUFmLENBQWY7QUFDRCxlQUZELE1BRU87QUFDTGpCLGlCQUFDLENBQUMsU0FBRCxDQUFELENBQWFvQixJQUFiLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCO0FBQ0FwQixpQkFBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZb0IsSUFBWixDQUFpQixRQUFqQixFQUEyQixJQUEzQjtBQUNBcEIsaUJBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVEsVUFBYixDQUF3QixRQUF4QjtBQUNBUixpQkFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQlMsS0FBbEI7QUFDRDs7QUFFRFksK0VBQWMsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQUFkO0FBRUFyQixlQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cc0IsR0FBbkIsQ0FBdUIsRUFBdkI7QUFDQXRCLGVBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCc0IsR0FBdEIsQ0FBMEIsRUFBMUI7QUFDQXRCLGVBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCc0IsR0FBdkIsQ0FBMkIsRUFBM0IsRUF4QmtCLENBeUJsQjtBQUNBOztBQTFCa0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0QmxCUCxxQkFBTyxDQUFDQyxHQUFSO0FBRUFLLCtFQUFjLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FBZDtBQUNBRSxnRkFBZSxDQUFDLFlBQUQsQ0FBZjs7QUEvQmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NELENBekRBLENBQUQsQyIsImZpbGUiOiJzaWdudXAuMjUxMTcyNmM5YTY5NTYzMzFkNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucywgbm8tdW5kZWYgKi9cbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzJztcblxuaW1wb3J0IHtcbiAgZ2V0SW5wdXRWYWx1ZSxcbiAgcG9zdFNpZ25VcERhdGEsXG4gIGFkZEZhaWx1cmVBbGVydCxcbiAgYWRkU3Bpbm5lcixcbiAgcmVwbGFjZUNvbnRlbnQsXG4gIGFkZFdhcm5pbmdBbGVydFxufSBmcm9tICcuL2F1dGhNZS5qcyc7XG5cbiQoKCkgPT4ge1xuICBsZXQgc2lnbnVwVXNlck5hbWUgPSBnZXRJbnB1dFZhbHVlKCduZXctdXNlcm5hbWUnKTtcbiAgbGV0IHNpZ251cFBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnc2lnbnVwLXBhc3N3b3JkJyk7XG4gIGxldCBjb25maXJtUGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdjb25maXJtLXBhc3N3b3JkJyk7XG5cbiAgKGFzeW5jICgpID0+IHtcbiAgICB3aGlsZSAoXG4gICAgICBzaWdudXBVc2VyTmFtZSA9PT0gJycgfHxcbiAgICAgIHNpZ251cFBhc3N3b3JkID09PSAnJyB8fFxuICAgICAgY29uZmlybVBhc3N3b3JkID09PSAnJ1xuICAgICkge1xuICAgICAgc2lnbnVwVXNlck5hbWUgPSBnZXRJbnB1dFZhbHVlKCduZXctdXNlcm5hbWUnKTtcbiAgICAgIHNpZ251cFBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnc2lnbnVwLXBhc3N3b3JkJyk7XG4gICAgICBjb25maXJtUGFzc3dvcmQgPSBnZXRJbnB1dFZhbHVlKCdjb25maXJtLXBhc3N3b3JkJyk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAkKCcjc2lnbnVwQnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgfSkoKTtcblxuICAkKCcjc2lnbnVwQnRuJykuY2xpY2soYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBhZGRTcGlubmVyKCdzaWdudXBCdG4nKTtcblxuICAgICAgY29uc3QgYmFja0VuZFJlc3BvbnNlID0gYXdhaXQgcG9zdFNpZ25VcERhdGEoJy9hdXRoL3NpZ251cCcpO1xuICAgICAgY29uc29sZS5sb2coYmFja0VuZFJlc3BvbnNlKTtcblxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGJhY2tFbmRSZXNwb25zZS5kYXRhO1xuXG4gICAgICBpZiAoc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgYWRkV2FybmluZ0FsZXJ0KCdzaWdudXBGb3JtJywgc3RhdHVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzaWdudXAnKS5wcm9wKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgJCgnI2xvZ2luJykucHJvcCgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICQoJyNsb2dvdXQnKS5yZW1vdmVBdHRyKCdoaWRkZW4nKTtcbiAgICAgICAgJCgnI2Nsb3NlU2lnbnVwJykuY2xpY2soKTtcbiAgICAgIH1cblxuICAgICAgcmVwbGFjZUNvbnRlbnQoJ3NpZ251cEJ0bicsICdTaWduIFVwJyk7XG5cbiAgICAgICQoJyNuZXctdXNlcm5hbWUnKS52YWwoJycpO1xuICAgICAgJCgnI3NpZ251cC1wYXNzd29yZCcpLnZhbCgnJyk7XG4gICAgICAkKCcjY29uZmlybS1wYXNzd29yZCcpLnZhbCgnJyk7XG4gICAgICAvLyBoaWRlIHNpZ251cCBidXR0b25cbiAgICAgIC8vIGRpc3BsYXkgdXNlcm5hbWUgPT4gJ1dlbGNvbWUgdXNlcm5hbWUnXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgcmVwbGFjZUNvbnRlbnQoJ3NpZ251cEJ0bicsICdTaWduIFVwJyk7XG4gICAgICBhZGRGYWlsdXJlQWxlcnQoJ3NpZ251cEZvcm0nKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9