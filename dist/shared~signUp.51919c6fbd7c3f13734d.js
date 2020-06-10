(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared~signUp"],{

/***/ "jSCX":
/*!**********************************!*\
  !*** ./public/js/auth/authMe.js ***!
  \**********************************/
/*! exports provided: clearInputOnClick, addWarningAlert, checkPasswordsMatch, getInputValue, replaceContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInputOnClick", function() { return clearInputOnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWarningAlert", function() { return addWarningAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPasswordsMatch", function() { return checkPasswordsMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValue", function() { return getInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceContent", function() { return replaceContent; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "ls82");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
// eslint-disable-next-line import/extensions

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
  return $("#".concat(attrId)).append("<div class=\"alert alert-warning alert-rounded\">\n                                  <i class=\"ti-alert\"></i> ".concat(message, "\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span aria-hidden=\"true\">\xD7</span> </button> </div>"));
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
 * Gets the value in an input field (text, dropdowns, etc.) and trims the
 * white space.
 * @param {string} elementId
 * @returns {string}
 */


var getInputValue = function getInputValue(elementId) {
  var trimmedWhiteSpace = $("#".concat(elementId)).val().trim();
  return trimmedWhiteSpace;
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9hdXRoTWUuanMiXSwibmFtZXMiOlsiY2xlYXJJbnB1dE9uQ2xpY2siLCJlbGVUb1dhdGNoIiwiZWxlc1RvQ2xlYXIiLCIkIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaSIsImxlbmd0aCIsInZhbCIsImFkZFdhcm5pbmdBbGVydCIsImF0dHJJZCIsIm1lc3NhZ2UiLCJhcHBlbmQiLCJyZXBsYWNlQ29udGVudCIsImlubmVyQ29udGVudCIsImh0bWwiLCJnZXRJbnB1dFZhbHVlIiwiZWxlbWVudElkIiwidHJpbW1lZFdoaXRlU3BhY2UiLCJ0cmltIiwiY2hlY2tQYXNzd29yZHNNYXRjaCIsInBhc3N3b3JkSWQiLCJjb25maXJtUHdkSWQiLCJtYWluUHdkIiwiY29uZmlybVB3ZCIsImRvUHdkTWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBTUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxVQUFELEVBQWdDO0FBQUEsb0NBQWhCQyxXQUFnQjtBQUFoQkEsZUFBZ0I7QUFBQTs7QUFDeEQsU0FBT0MsQ0FBQyxZQUFLRixVQUFMLEVBQUQsQ0FBb0JHLEtBQXBCLENBQTBCLFVBQUNDLEtBQUQsRUFBVztBQUMxQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsV0FBVyxDQUFDTSxNQUFoQyxFQUF3Q0QsQ0FBQyxJQUFJLENBQTdDLEVBQWdEO0FBQzlDSixPQUFDLFlBQUtELFdBQVcsQ0FBQ0ssQ0FBRCxDQUFoQixFQUFELENBQXdCRSxHQUF4QixDQUE0QixFQUE1QjtBQUNEO0FBQ0YsR0FOTSxDQUFQO0FBT0QsQ0FSRDtBQVVBOzs7Ozs7OztBQU1BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsTUFBRCxFQUFrQztBQUFBLE1BQXpCQyxPQUF5Qix1RUFBZixVQUFlO0FBQ3hELFNBQU9ULENBQUMsWUFBS1EsTUFBTCxFQUFELENBQWdCRSxNQUFoQiwySEFDb0RELE9BRHBELHNMQUFQO0FBR0QsQ0FKRDtBQU1BOzs7Ozs7OztBQU1BLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsTUFBRCxFQUFTSSxZQUFULEVBQTBCO0FBQy9DLFNBQU9aLENBQUMsWUFBS1EsTUFBTCxFQUFELENBQWdCSyxJQUFoQixXQUF3QkQsWUFBeEIsRUFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7QUFNQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUNuQyxNQUFNQyxpQkFBaUIsR0FBR2hCLENBQUMsWUFBS2UsU0FBTCxFQUFELENBQW1CVCxHQUFuQixHQUF5QlcsSUFBekIsRUFBMUI7QUFDQSxTQUFPRCxpQkFBUDtBQUNELENBSEQ7QUFLQTs7Ozs7Ozs7QUFNQSxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixFQUE4QjtBQUN4RCxNQUFNQyxPQUFPLEdBQUdQLGFBQWEsQ0FBQ0ssVUFBRCxDQUE3QjtBQUNBLE1BQU1HLFVBQVUsR0FBR1IsYUFBYSxDQUFDTSxZQUFELENBQWhDO0FBRUEsTUFBSUcsVUFBSjs7QUFFQSxNQUFJRixPQUFPLEtBQUtDLFVBQWhCLEVBQTRCO0FBQzFCQyxjQUFVLEdBQUcsS0FBYjtBQUNELEdBRkQsTUFFTztBQUNMQSxjQUFVLEdBQUcsSUFBYjtBQUNEOztBQUVELFNBQU9BLFVBQVA7QUFDRCxDQWJEIiwiZmlsZSI6InNoYXJlZH5zaWduVXAuNTE5MTljNmZiZDdjM2YxMzczNGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIGVsZVRvV2F0Y2hcbiAqIEBwYXJhbSB7YXJyYXl9IGVsZXNUb0NsZWFyXG4gKiBAcmV0dXJucyB7dm9pZCB8IGpRdWVyeX1cbiAqL1xuY29uc3QgY2xlYXJJbnB1dE9uQ2xpY2sgPSAoZWxlVG9XYXRjaCwgLi4uZWxlc1RvQ2xlYXIpID0+IHtcbiAgcmV0dXJuICQoYCMke2VsZVRvV2F0Y2h9YCkuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlc1RvQ2xlYXIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICQoYCMke2VsZXNUb0NsZWFyW2ldfWApLnZhbCgnJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRySWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7dm9pZCB8IGpRdWVyeX1cbiAqL1xuY29uc3QgYWRkV2FybmluZ0FsZXJ0ID0gKGF0dHJJZCwgbWVzc2FnZSA9ICdXYXJuaW5nIScpID0+IHtcbiAgcmV0dXJuICQoYCMke2F0dHJJZH1gKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nIGFsZXJ0LXJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInRpLWFsZXJ0XCI+PC9pPiAke21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+IDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+YCk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2VzIHRoZSBDb250ZW50IG9mIGFuIEhUTUwgRWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJJZFxuICogQHBhcmFtIHtzdHJpbmd9IGlubmVyQ29udGVudFxuICogQHJldHVybnMgeyp8dm9pZHxqUXVlcnl9XG4gKi9cbmNvbnN0IHJlcGxhY2VDb250ZW50ID0gKGF0dHJJZCwgaW5uZXJDb250ZW50KSA9PiB7XG4gIHJldHVybiAkKGAjJHthdHRySWR9YCkuaHRtbChgJHtpbm5lckNvbnRlbnR9YCk7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGluIGFuIGlucHV0IGZpZWxkICh0ZXh0LCBkcm9wZG93bnMsIGV0Yy4pIGFuZCB0cmltcyB0aGVcbiAqIHdoaXRlIHNwYWNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IChlbGVtZW50SWQpID0+IHtcbiAgY29uc3QgdHJpbW1lZFdoaXRlU3BhY2UgPSAkKGAjJHtlbGVtZW50SWR9YCkudmFsKCkudHJpbSgpO1xuICByZXR1cm4gdHJpbW1lZFdoaXRlU3BhY2U7XG59O1xuXG4vKipcbiAqIENoZWNrcyBQYXNzc3dvcmRzIG1hdGNoXG4gKiBAcGFyYW0gcGFzc3dvcmRJZFxuICogQHBhcmFtIGNvbmZpcm1Qd2RJZFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGNoZWNrUGFzc3dvcmRzTWF0Y2ggPSAocGFzc3dvcmRJZCwgY29uZmlybVB3ZElkKSA9PiB7XG4gIGNvbnN0IG1haW5Qd2QgPSBnZXRJbnB1dFZhbHVlKHBhc3N3b3JkSWQpO1xuICBjb25zdCBjb25maXJtUHdkID0gZ2V0SW5wdXRWYWx1ZShjb25maXJtUHdkSWQpO1xuXG4gIGxldCBkb1B3ZE1hdGNoO1xuXG4gIGlmIChtYWluUHdkICE9PSBjb25maXJtUHdkKSB7XG4gICAgZG9Qd2RNYXRjaCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGRvUHdkTWF0Y2ggPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGRvUHdkTWF0Y2g7XG59O1xuXG5leHBvcnQgeyBjbGVhcklucHV0T25DbGljaywgYWRkV2FybmluZ0FsZXJ0LCBjaGVja1Bhc3N3b3Jkc01hdGNoLCBnZXRJbnB1dFZhbHVlLCByZXBsYWNlQ29udGVudCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==