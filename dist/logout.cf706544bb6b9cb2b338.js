(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout"],{

/***/ "Vlqs":
/*!**********************************!*\
  !*** ./public/js/auth/logout.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "ls82");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);

// eslint-disable-next-line import/extensions


var sendLogOutRequest = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var logMeOut;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // eslint-disable-next-line no-undef
            logMeOut = axios.post('/logout', {
              message: 'Log me out!'
            });
            return _context.abrupt("return", logMeOut);

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function sendLogOutRequest() {
    return _ref.apply(this, arguments);
  };
}();

$('#logout').click( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();
            _context2.prev = 1;
            _context2.next = 4;
            return sendLogOutRequest();

          case 4:
            return _context2.abrupt("return", location.reload());

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ })

},[["Vlqs","runtime","npm.babel","npm.regenerator-runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9sb2dvdXQuanMiXSwibmFtZXMiOlsic2VuZExvZ091dFJlcXVlc3QiLCJsb2dNZU91dCIsImF4aW9zIiwicG9zdCIsIm1lc3NhZ2UiLCIkIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUI7QUFBQSxrSUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV0QjtBQUNNQyxvQkFIZ0IsR0FHTEMsS0FBSyxDQUFDQyxJQUFOLENBQVcsU0FBWCxFQUFzQjtBQUNyQ0MscUJBQU8sRUFBRTtBQUQ0QixhQUF0QixDQUhLO0FBQUEsNkNBT2ZILFFBUGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBakJELGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFhQUssQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiO0FBQUEsbUlBQW1CLGtCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGlCQUFLLENBQUNDLGNBQU47QUFEaUI7QUFBQTtBQUFBLG1CQUdUUixpQkFBaUIsRUFIUjs7QUFBQTtBQUFBLDhDQUtSUyxRQUFRLENBQUNDLE1BQVQsRUFMUTs7QUFBQTtBQUFBO0FBQUE7QUFPZkMsbUJBQU8sQ0FBQ0MsR0FBUjtBQVBlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5COztBQUFBO0FBQUE7QUFBQTtBQUFBLEsiLCJmaWxlIjoibG9nb3V0LmNmNzA2NTQ0YmI2YjljYjJiMzM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyc7XG5cbmNvbnN0IHNlbmRMb2dPdXRSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGNvbnN0IGxvZ01lT3V0ID0gYXhpb3MucG9zdCgnL2xvZ291dCcsIHtcbiAgICAgIG1lc3NhZ2U6ICdMb2cgbWUgb3V0ISdcbiAgICB9KTtcblxuICAgIHJldHVybiBsb2dNZU91dDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbiQoJyNsb2dvdXQnKS5jbGljayhhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzZW5kTG9nT3V0UmVxdWVzdCgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICByZXR1cm4gbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=