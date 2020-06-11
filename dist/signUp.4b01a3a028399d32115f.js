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
              status = backEndResponse.data.status;

              if (status !== 'success') {
                Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addWarningAlert"])('signupForm', status);
              } else {
                $('#closeSignup').click();
              }

              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["replaceContent"])('signupBtn', 'Sign Up');
              $('#new-username').val('');
              $('#signup-password').val('');
              $('#confirm-password').val(''); // hide signup button
              // display username => 'Welcome username'

              _context2.next = 19;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["replaceContent"])('signupBtn', 'Sign Up');
              Object(_authMe_js__WEBPACK_IMPORTED_MODULE_2__["addFailureAlert"])('signupForm');

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

},[["k+zK","runtime","npm.babel","npm.regenerator-runtime","shared~signUp"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9zaWduVXAuanMiXSwibmFtZXMiOlsiJCIsInNpZ251cFVzZXJOYW1lIiwiZ2V0SW5wdXRWYWx1ZSIsInNpZ251cFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0ciIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFNwaW5uZXIiLCJwb3N0U2lnblVwRGF0YSIsImJhY2tFbmRSZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJhZGRXYXJuaW5nQWxlcnQiLCJyZXBsYWNlQ29udGVudCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRGYWlsdXJlQWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVNBQSxDQUFDLENBQUMsWUFBTTtBQUNOLE1BQUlDLGNBQWMsR0FBR0MsZ0VBQWEsQ0FBQyxjQUFELENBQWxDO0FBQ0EsTUFBSUMsY0FBYyxHQUFHRCxnRUFBYSxDQUFDLGlCQUFELENBQWxDO0FBQ0EsTUFBSUUsZUFBZSxHQUFHRixnRUFBYSxDQUFDLGtCQUFELENBQW5DOztBQUVBLHVIQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFFR0QsY0FBYyxLQUFLLEVBQW5CLElBQ0FFLGNBQWMsS0FBSyxFQURuQixJQUVBQyxlQUFlLEtBQUssRUFKdkI7QUFBQTtBQUFBO0FBQUE7O0FBTUdILDBCQUFjLEdBQUdDLGdFQUFhLENBQUMsY0FBRCxDQUE5QjtBQUNBQywwQkFBYyxHQUFHRCxnRUFBYSxDQUFDLGlCQUFELENBQTlCO0FBQ0FFLDJCQUFlLEdBQUdGLGdFQUFhLENBQUMsa0JBQUQsQ0FBL0IsQ0FSSCxDQVNHOztBQVRIO0FBQUEsbUJBVVMsSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM3QkMsd0JBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBVjtBQUNELGFBRkssQ0FWVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FlUU4sQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlEsVUFBaEIsQ0FBMkIsVUFBM0IsQ0FmUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQWtCQVIsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlMsS0FBaEI7QUFBQSxxSUFBc0Isa0JBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQSxtQkFBSyxDQUFDQyxjQUFOO0FBRG9CO0FBSWxCQywyRUFBVSxDQUFDLFdBQUQsQ0FBVjtBQUprQjtBQUFBLHFCQU1ZQyxpRUFBYyxDQUFDLGNBQUQsQ0FOMUI7O0FBQUE7QUFNWkMsNkJBTlk7QUFRVkMsb0JBUlUsR0FRQ0QsZUFBZSxDQUFDRSxJQVJqQixDQVFWRCxNQVJVOztBQVVsQixrQkFBSUEsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJFLGtGQUFlLENBQUMsWUFBRCxFQUFlRixNQUFmLENBQWY7QUFDRCxlQUZELE1BRU87QUFDTGYsaUJBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JTLEtBQWxCO0FBQ0Q7O0FBRURTLCtFQUFjLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FBZDtBQUVBbEIsZUFBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm1CLEdBQW5CLENBQXVCLEVBQXZCO0FBQ0FuQixlQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQm1CLEdBQXRCLENBQTBCLEVBQTFCO0FBQ0FuQixlQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qm1CLEdBQXZCLENBQTJCLEVBQTNCLEVBcEJrQixDQXFCbEI7QUFDQTs7QUF0QmtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JsQkMscUJBQU8sQ0FBQ0MsR0FBUjtBQUVBSCwrRUFBYyxDQUFDLFdBQUQsRUFBYyxTQUFkLENBQWQ7QUFDQUksZ0ZBQWUsQ0FBQyxZQUFELENBQWY7O0FBM0JrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCRCxDQXJEQSxDQUFELEMiLCJmaWxlIjoic2lnblVwLjRiMDFhM2EwMjgzOTlkMzIxMTVmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMsIG5vLXVuZGVmICovXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyc7XG5cbmltcG9ydCB7XG4gIGdldElucHV0VmFsdWUsXG4gIHBvc3RTaWduVXBEYXRhLFxuICBhZGRGYWlsdXJlQWxlcnQsXG4gIGFkZFNwaW5uZXIsXG4gIHJlcGxhY2VDb250ZW50LFxuICBhZGRXYXJuaW5nQWxlcnRcbn0gZnJvbSAnLi9hdXRoTWUuanMnO1xuXG4kKCgpID0+IHtcbiAgbGV0IHNpZ251cFVzZXJOYW1lID0gZ2V0SW5wdXRWYWx1ZSgnbmV3LXVzZXJuYW1lJyk7XG4gIGxldCBzaWdudXBQYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ3NpZ251cC1wYXNzd29yZCcpO1xuICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnY29uZmlybS1wYXNzd29yZCcpO1xuXG4gIChhc3luYyAoKSA9PiB7XG4gICAgd2hpbGUgKFxuICAgICAgc2lnbnVwVXNlck5hbWUgPT09ICcnIHx8XG4gICAgICBzaWdudXBQYXNzd29yZCA9PT0gJycgfHxcbiAgICAgIGNvbmZpcm1QYXNzd29yZCA9PT0gJydcbiAgICApIHtcbiAgICAgIHNpZ251cFVzZXJOYW1lID0gZ2V0SW5wdXRWYWx1ZSgnbmV3LXVzZXJuYW1lJyk7XG4gICAgICBzaWdudXBQYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ3NpZ251cC1wYXNzd29yZCcpO1xuICAgICAgY29uZmlybVBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnY29uZmlybS1wYXNzd29yZCcpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJCgnI3NpZ251cEJ0bicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gIH0pKCk7XG5cbiAgJCgnI3NpZ251cEJ0bicpLmNsaWNrKGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgYWRkU3Bpbm5lcignc2lnbnVwQnRuJyk7XG5cbiAgICAgIGNvbnN0IGJhY2tFbmRSZXNwb25zZSA9IGF3YWl0IHBvc3RTaWduVXBEYXRhKCcvYXV0aC9zaWdudXAnKTtcblxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGJhY2tFbmRSZXNwb25zZS5kYXRhO1xuXG4gICAgICBpZiAoc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgYWRkV2FybmluZ0FsZXJ0KCdzaWdudXBGb3JtJywgc3RhdHVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNjbG9zZVNpZ251cCcpLmNsaWNrKCk7XG4gICAgICB9XG5cbiAgICAgIHJlcGxhY2VDb250ZW50KCdzaWdudXBCdG4nLCAnU2lnbiBVcCcpO1xuXG4gICAgICAkKCcjbmV3LXVzZXJuYW1lJykudmFsKCcnKTtcbiAgICAgICQoJyNzaWdudXAtcGFzc3dvcmQnKS52YWwoJycpO1xuICAgICAgJCgnI2NvbmZpcm0tcGFzc3dvcmQnKS52YWwoJycpO1xuICAgICAgLy8gaGlkZSBzaWdudXAgYnV0dG9uXG4gICAgICAvLyBkaXNwbGF5IHVzZXJuYW1lID0+ICdXZWxjb21lIHVzZXJuYW1lJ1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHJlcGxhY2VDb250ZW50KCdzaWdudXBCdG4nLCAnU2lnbiBVcCcpO1xuICAgICAgYWRkRmFpbHVyZUFsZXJ0KCdzaWdudXBGb3JtJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==