(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared~signUp"],{

/***/ "jSCX":
/*!**********************************!*\
  !*** ./public/js/auth/authMe.js ***!
  \**********************************/
/*! exports provided: clearInputOnClick, addWarningAlert, checkPasswordsMatch, getInputValue, replaceContent, postSignUpData, buildObject, addFailureAlert, addSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInputOnClick", function() { return clearInputOnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWarningAlert", function() { return addWarningAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPasswordsMatch", function() { return checkPasswordsMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValue", function() { return getInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceContent", function() { return replaceContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSignUpData", function() { return postSignUpData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildObject", function() { return buildObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFailureAlert", function() { return addFailureAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSpinner", function() { return addSpinner; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "ls82");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable import/extensions, no-undef */

/**
 *
 * @param {string} attrId
 * @param {string} message
 * @returns {void | jQuery}
 */

var addFailureAlert = function addFailureAlert(attrId) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Something failed. Please retry in a few minutes.';
  return $("#".concat(attrId)).append("<div class=\"alert alert-danger alert-rounded\">\n                                  <strong> OH NOOOOO!</strong>  ".concat(message, "\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div>"));
};
/**
 * Gets the value in an input field (text, dropdowns, etc.) and trims the
 * white space.
 * @param {string} elementId
 * @returns {string}
 */


var getInputValue = function getInputValue(elementId) {
  var trimmedWhiteSpace = $("#".concat(elementId)).val();
  return trimmedWhiteSpace;
};
/**
 * Builds an Object
 * @param elementIdArray
 * @returns {{}}
 */


var buildObject = function buildObject(elementIdArray) {
  var formData = {};

  for (var i = 0; i < elementIdArray.length; i += 1) {
    var key = elementIdArray[i];
    var keyValue = getInputValue(key).trim();
    Object.defineProperty(formData, key, {
      value: keyValue,
      configurable: false,
      writable: true,
      enumerable: true
    });
  }

  return formData;
};
/**
 * Posts It
 * @param {String} url
 * @param {Array} elementIdArray
 * @returns {Promise<*>}
 */


var postSignUpData = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var username, password, confirmPassword, postIt;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = getInputValue('new-username');
            password = getInputValue('signup-password');
            confirmPassword = getInputValue('confirm-password');
            _context.prev = 3;
            _context.next = 6;
            return axios.post(url, {
              username: username,
              password: password,
              confirmPassword: confirmPassword
            });

          case 6:
            postIt = _context.sent;
            return _context.abrupt("return", postIt);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            addFailureAlert('signupForm');
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function postSignUpData(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 *
 * @param eleToWatch
 * @param {array} elesToClear
 * @returns {void | jQuery}
 */


var clearInputOnClick = function clearInputOnClick(eleToWatch) {
  for (var _len = arguments.length, elesToClear = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elesToClear[_key - 1] = arguments[_key];
  }

  return $("#".concat(eleToWatch)).click(function (event) {
    event.preventDefault();

    for (var i = 0; i < elesToClear.length; i += 1) {
      $("#".concat(elesToClear[i])).val('');
    }
  });
};
/**
 *
 * @param {string} attrId
 * @param {string} message
 * @returns {void | jQuery}
 */


var addWarningAlert = function addWarningAlert(attrId) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Warning!';
  return $("#".concat(attrId)).append("<div class=\"alert alert-warning alert-rounded\">\n                                  ".concat(message, "\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div>"));
};
/**
 * Replaces the Content of an HTML Element
 * @param {string} attrId
 * @param {string} innerContent
 * @returns {*|void|jQuery}
 */


var replaceContent = function replaceContent(attrId, innerContent) {
  return $("#".concat(attrId)).html("".concat(innerContent));
};
/**
 * Checks Passswords match
 * @param passwordId
 * @param confirmPwdId
 * @returns {boolean}
 */


var checkPasswordsMatch = function checkPasswordsMatch(passwordId, confirmPwdId) {
  var mainPwd = getInputValue(passwordId);
  var confirmPwd = getInputValue(confirmPwdId);
  var doPwdMatch;

  if (mainPwd !== confirmPwd) {
    doPwdMatch = false;
  } else {
    doPwdMatch = true;
  }

  return doPwdMatch;
};
/**
 * Adds a spinner after the
 *
 * @param {string} attrId
 * @returns {*|void|jQuery}
 */


var addSpinner = function addSpinner(attrId) {
  return $("#".concat(attrId)).html("<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span> Loading...");
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9hdXRoTWUuanMiXSwibmFtZXMiOlsiYWRkRmFpbHVyZUFsZXJ0IiwiYXR0cklkIiwibWVzc2FnZSIsIiQiLCJhcHBlbmQiLCJnZXRJbnB1dFZhbHVlIiwiZWxlbWVudElkIiwidHJpbW1lZFdoaXRlU3BhY2UiLCJ2YWwiLCJidWlsZE9iamVjdCIsImVsZW1lbnRJZEFycmF5IiwiZm9ybURhdGEiLCJpIiwibGVuZ3RoIiwia2V5Iiwia2V5VmFsdWUiLCJ0cmltIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZW51bWVyYWJsZSIsInBvc3RTaWduVXBEYXRhIiwidXJsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInBvc3RJdCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhcklucHV0T25DbGljayIsImVsZVRvV2F0Y2giLCJlbGVzVG9DbGVhciIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFdhcm5pbmdBbGVydCIsInJlcGxhY2VDb250ZW50IiwiaW5uZXJDb250ZW50IiwiaHRtbCIsImNoZWNrUGFzc3dvcmRzTWF0Y2giLCJwYXNzd29yZElkIiwiY29uZmlybVB3ZElkIiwibWFpblB3ZCIsImNvbmZpcm1Qd2QiLCJkb1B3ZE1hdGNoIiwiYWRkU3Bpbm5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3RCQyxNQURzQixFQUduQjtBQUFBLE1BREhDLE9BQ0csdUVBRE8sa0RBQ1A7QUFDSCxTQUFPQyxDQUFDLFlBQUtGLE1BQUwsRUFBRCxDQUFnQkcsTUFBaEIsNkhBQ3lERixPQUR6RCx5TEFBUDtBQUdELENBUEQ7QUFTQTs7Ozs7Ozs7QUFN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LFNBQU90QyxDQUFDLFlBQUtGLE1BQUwsRUFBRCxDQUFnQnlDLElBQWhCLFdBQXdCRCxZQUF4QixFQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7OztBQU1BLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLEVBQThCO0FBQ3hELE1BQU1DLE9BQU8sR0FBR3pDLGFBQWEsQ0FBQ3VDLFVBQUQsQ0FBN0I7QUFDQSxNQUFNRyxVQUFVLEdBQUcxQyxhQUFhLENBQUN3QyxZQUFELENBQWhDO0FBRUEsTUFBSUcsVUFBSjs7QUFFQSxNQUFJRixPQUFPLEtBQUtDLFVBQWhCLEVBQTRCO0FBQzFCQyxjQUFVLEdBQUcsS0FBYjtBQUNELEdBRkQsTUFFTztBQUNMQSxjQUFVLEdBQUcsSUFBYjtBQUNEOztBQUVELFNBQU9BLFVBQVA7QUFDRCxDQWJEO0FBZUE7Ozs7Ozs7O0FBTUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2hELE1BQUQsRUFBWTtBQUM3QixTQUFPRSxDQUFDLFlBQUtGLE1BQUwsRUFBRCxDQUFnQnlDLElBQWhCLDRHQUFQO0FBR0QsQ0FKRCIsImZpbGUiOiJzaGFyZWR+c2lnblVwLjg3NzZlMWEyODg2MjA2YWZkNzM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMsIG5vLXVuZGVmICovXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRySWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7dm9pZCB8IGpRdWVyeX1cbiAqL1xuY29uc3QgYWRkRmFpbHVyZUFsZXJ0ID0gKFxuICBhdHRySWQsXG4gIG1lc3NhZ2UgPSAnU29tZXRoaW5nIGZhaWxlZC4gUGxlYXNlIHJldHJ5IGluIGEgZmV3IG1pbnV0ZXMuJ1xuKSA9PiB7XG4gIHJldHVybiAkKGAjJHthdHRySWR9YCkuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LXJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiBPSCBOT09PT08hPC9zdHJvbmc+ICAke21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+IDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj5gKTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgaW4gYW4gaW5wdXQgZmllbGQgKHRleHQsIGRyb3Bkb3ducywgZXRjLikgYW5kIHRyaW1zIHRoZVxuICogd2hpdGUgc3BhY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBnZXRJbnB1dFZhbHVlID0gKGVsZW1lbnRJZCkgPT4ge1xuICBjb25zdCB0cmltbWVkV2hpdGVTcGFjZSA9ICQoYCMke2VsZW1lbnRJZH1gKS52YWwoKTtcbiAgcmV0dXJuIHRyaW1tZWRXaGl0ZVNwYWNlO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYW4gT2JqZWN0XG4gKiBAcGFyYW0gZWxlbWVudElkQXJyYXlcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3QgYnVpbGRPYmplY3QgPSAoZWxlbWVudElkQXJyYXkpID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRJZEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qga2V5ID0gZWxlbWVudElkQXJyYXlbaV07XG4gICAgY29uc3Qga2V5VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGtleSkudHJpbSgpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZvcm1EYXRhLCBrZXksIHtcbiAgICAgIHZhbHVlOiBrZXlWYWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmb3JtRGF0YTtcbn07XG5cbi8qKlxuICogUG9zdHMgSXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7QXJyYXl9IGVsZW1lbnRJZEFycmF5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAqL1xuY29uc3QgcG9zdFNpZ25VcERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gZ2V0SW5wdXRWYWx1ZSgnbmV3LXVzZXJuYW1lJyk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnc2lnbnVwLXBhc3N3b3JkJyk7XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ2NvbmZpcm0tcGFzc3dvcmQnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHBvc3RJdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgY29uZmlybVBhc3N3b3JkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcG9zdEl0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBhZGRGYWlsdXJlQWxlcnQoJ3NpZ251cEZvcm0nKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG4vKipcbiAqXG4gKiBAcGFyYW0gZWxlVG9XYXRjaFxuICogQHBhcmFtIHthcnJheX0gZWxlc1RvQ2xlYXJcbiAqIEByZXR1cm5zIHt2b2lkIHwgalF1ZXJ5fVxuICovXG5jb25zdCBjbGVhcklucHV0T25DbGljayA9IChlbGVUb1dhdGNoLCAuLi5lbGVzVG9DbGVhcikgPT4ge1xuICByZXR1cm4gJChgIyR7ZWxlVG9XYXRjaH1gKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVzVG9DbGVhci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgJChgIyR7ZWxlc1RvQ2xlYXJbaV19YCkudmFsKCcnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJJZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEByZXR1cm5zIHt2b2lkIHwgalF1ZXJ5fVxuICovXG5jb25zdCBhZGRXYXJuaW5nQWxlcnQgPSAoYXR0cklkLCBtZXNzYWdlID0gJ1dhcm5pbmchJykgPT4ge1xuICByZXR1cm4gJChgIyR7YXR0cklkfWApLmFwcGVuZChgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgYWxlcnQtcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4gPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PmApO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgQ29udGVudCBvZiBhbiBIVE1MIEVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRySWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbm5lckNvbnRlbnRcbiAqIEByZXR1cm5zIHsqfHZvaWR8alF1ZXJ5fVxuICovXG5jb25zdCByZXBsYWNlQ29udGVudCA9IChhdHRySWQsIGlubmVyQ29udGVudCkgPT4ge1xuICByZXR1cm4gJChgIyR7YXR0cklkfWApLmh0bWwoYCR7aW5uZXJDb250ZW50fWApO1xufTtcblxuLyoqXG4gKiBDaGVja3MgUGFzc3N3b3JkcyBtYXRjaFxuICogQHBhcmFtIHBhc3N3b3JkSWRcbiAqIEBwYXJhbSBjb25maXJtUHdkSWRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBjaGVja1Bhc3N3b3Jkc01hdGNoID0gKHBhc3N3b3JkSWQsIGNvbmZpcm1Qd2RJZCkgPT4ge1xuICBjb25zdCBtYWluUHdkID0gZ2V0SW5wdXRWYWx1ZShwYXNzd29yZElkKTtcbiAgY29uc3QgY29uZmlybVB3ZCA9IGdldElucHV0VmFsdWUoY29uZmlybVB3ZElkKTtcblxuICBsZXQgZG9Qd2RNYXRjaDtcblxuICBpZiAobWFpblB3ZCAhPT0gY29uZmlybVB3ZCkge1xuICAgIGRvUHdkTWF0Y2ggPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBkb1B3ZE1hdGNoID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkb1B3ZE1hdGNoO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgc3Bpbm5lciBhZnRlciB0aGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cklkXG4gKiBAcmV0dXJucyB7Knx2b2lkfGpRdWVyeX1cbiAqL1xuY29uc3QgYWRkU3Bpbm5lciA9IChhdHRySWQpID0+IHtcbiAgcmV0dXJuICQoYCMke2F0dHJJZH1gKS5odG1sKFxuICAgIGA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4gTG9hZGluZy4uLmBcbiAgKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNsZWFySW5wdXRPbkNsaWNrLFxuICBhZGRXYXJuaW5nQWxlcnQsXG4gIGNoZWNrUGFzc3dvcmRzTWF0Y2gsXG4gIGdldElucHV0VmFsdWUsXG4gIHJlcGxhY2VDb250ZW50LFxuICBwb3N0U2lnblVwRGF0YSxcbiAgYnVpbGRPYmplY3QsXG4gIGFkZEZhaWx1cmVBbGVydCxcbiAgYWRkU3Bpbm5lclxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=