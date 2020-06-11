(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login~shared~signup"],{

/***/ "jSCX":
/*!**********************************!*\
  !*** ./public/js/auth/authMe.js ***!
  \**********************************/
/*! exports provided: clearInputOnClick, addWarningAlert, checkPasswordsMatch, getInputValue, replaceContent, postSignUpData, buildObject, addFailureAlert, addSpinner, postLoginData */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLoginData", function() { return postLoginData; });
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
 * Posts Login
 * @param {String} url
 * @param {Array} elementIdArray
 * @returns {Promise<*>}
 */


var postLoginData = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    var username, password, postIt;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = getInputValue('username');
            password = getInputValue('password');
            _context2.prev = 2;
            _context2.next = 5;
            return axios.post(url, {
              username: username,
              password: password
            });

          case 5:
            postIt = _context2.sent;
            return _context2.abrupt("return", postIt);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            addFailureAlert('loginForm');
            return _context2.abrupt("return", _context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));

  return function postLoginData(_x2) {
    return _ref2.apply(this, arguments);
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
  return $("#".concat(attrId)).html("<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span> Working...");
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvYXV0aC9hdXRoTWUuanMiXSwibmFtZXMiOlsiYWRkRmFpbHVyZUFsZXJ0IiwiYXR0cklkIiwibWVzc2FnZSIsIiQiLCJhcHBlbmQiLCJnZXRJbnB1dFZhbHVlIiwiZWxlbWVudElkIiwidHJpbW1lZFdoaXRlU3BhY2UiLCJ2YWwiLCJidWlsZE9iamVjdCIsImVsZW1lbnRJZEFycmF5IiwiZm9ybURhdGEiLCJpIiwibGVuZ3RoIiwia2V5Iiwia2V5VmFsdWUiLCJ0cmltIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZW51bWVyYWJsZSIsInBvc3RTaWduVXBEYXRhIiwidXJsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInBvc3RJdCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0TG9naW5EYXRhIiwiY2xlYXJJbnB1dE9uQ2xpY2siLCJlbGVUb1dhdGNoIiwiZWxlc1RvQ2xlYXIiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGRXYXJuaW5nQWxlcnQiLCJyZXBsYWNlQ29udGVudCIsImlubmVyQ29udGVudCIsImh0bWwiLCJjaGVja1Bhc3N3b3Jkc01hdGNoIiwicGFzc3dvcmRJZCIsImNvbmZpcm1Qd2RJZCIsIm1haW5Qd2QiLCJjb25maXJtUHdkIiwiZG9Qd2RNYXRjaCIsImFkZFNwaW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FDdEJDLE1BRHNCLEVBR25CO0FBQUEsTUFESEMsT0FDRyx1RUFETyxrREFDUDtBQUNILFNBQU9DLENBQUMsWUFBS0YsTUFBTCxFQUFELENBQWdCRyxNQUFoQiw2SEFDeURGLE9BRHpELHlMQUFQO0FBR0QsQ0FQRDtBQVNBOzs7Ozs7OztBQU1BLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQ25DLE1BQU1DLGlCQUFpQixHQUFHSixDQUFDLFlBQUtHLFNBQUwsRUFBRCxDQUFtQkUsR0FBbkIsRUFBMUI7QUFDQSxTQUFPRCxpQkFBUDtBQUNELENBSEQ7QUFLQTs7Ozs7OztBQUtBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLGNBQUQsRUFBb0I7QUFDdEMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsY0FBYyxDQUFDRyxNQUFuQyxFQUEyQ0QsQ0FBQyxJQUFJLENBQWhELEVBQW1EO0FBQ2pELFFBQU1FLEdBQUcsR0FBR0osY0FBYyxDQUFDRSxDQUFELENBQTFCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHVixhQUFhLENBQUNTLEdBQUQsQ0FBYixDQUFtQkUsSUFBbkIsRUFBakI7QUFFQUMsVUFBTSxDQUFDQyxjQUFQLENBQXNCUCxRQUF0QixFQUFnQ0csR0FBaEMsRUFBcUM7QUFDbkNLLFdBQUssRUFBRUosUUFENEI7QUFFbkNLLGtCQUFZLEVBQUUsS0FGcUI7QUFHbkNDLGNBQVEsRUFBRSxJQUh5QjtBQUluQ0MsZ0JBQVUsRUFBRTtBQUp1QixLQUFyQztBQU1EOztBQUVELFNBQU9YLFFBQVA7QUFDRCxDQWhCRDtBQWtCQTs7Ozs7Ozs7QUFNQSxJQUFNWSxjQUFjO0FBQUEsa0lBQUcsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLG9CQURlLEdBQ0pwQixhQUFhLENBQUMsY0FBRCxDQURUO0FBRWZxQixvQkFGZSxHQUVKckIsYUFBYSxDQUFDLGlCQUFELENBRlQ7QUFHZnNCLDJCQUhlLEdBR0d0QixhQUFhLENBQUMsa0JBQUQsQ0FIaEI7QUFBQTtBQUFBO0FBQUEsbUJBTUV1QixLQUFLLENBQUNDLElBQU4sQ0FBV0wsR0FBWCxFQUFnQjtBQUNuQ0Msc0JBQVEsRUFBUkEsUUFEbUM7QUFFbkNDLHNCQUFRLEVBQVJBLFFBRm1DO0FBR25DQyw2QkFBZSxFQUFmQTtBQUhtQyxhQUFoQixDQU5GOztBQUFBO0FBTWJHLGtCQU5hO0FBQUEsNkNBWVpBLE1BWlk7O0FBQUE7QUFBQTtBQUFBO0FBY25CQyxtQkFBTyxDQUFDQyxHQUFSO0FBQ0FoQywyQkFBZSxDQUFDLFlBQUQsQ0FBZjtBQWZtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkdUIsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQjtBQW9CQTs7Ozs7Ozs7QUFNQSxJQUFNVSxhQUFhO0FBQUEsbUlBQUcsa0JBQU9ULEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLG9CQURjLEdBQ0hwQixhQUFhLENBQUMsVUFBRCxDQURWO0FBRWRxQixvQkFGYyxHQUVIckIsYUFBYSxDQUFDLFVBQUQsQ0FGVjtBQUFBO0FBQUE7QUFBQSxtQkFLR3VCLEtBQUssQ0FBQ0MsSUFBTixDQUFXTCxHQUFYLEVBQWdCO0FBQ25DQyxzQkFBUSxFQUFSQSxRQURtQztBQUVuQ0Msc0JBQVEsRUFBUkE7QUFGbUMsYUFBaEIsQ0FMSDs7QUFBQTtBQUtaSSxrQkFMWTtBQUFBLDhDQVVYQSxNQVZXOztBQUFBO0FBQUE7QUFBQTtBQVlsQkMsbUJBQU8sQ0FBQ0MsR0FBUjtBQUNBaEMsMkJBQWUsQ0FBQyxXQUFELENBQWY7QUFia0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYmlDLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7QUFpQkE7Ozs7Ozs7O0FBTUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxVQUFELEVBQWdDO0FBQUEsb0NBQWhCQyxXQUFnQjtBQUFoQkEsZUFBZ0I7QUFBQTs7QUFDeEQsU0FBT2pDLENBQUMsWUFBS2dDLFVBQUwsRUFBRCxDQUFvQkUsS0FBcEIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDQSxTQUFLLENBQUNDLGNBQU47O0FBRUEsU0FBSyxJQUFJM0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dCLFdBQVcsQ0FBQ3ZCLE1BQWhDLEVBQXdDRCxDQUFDLElBQUksQ0FBN0MsRUFBZ0Q7QUFDOUNULE9BQUMsWUFBS2lDLFdBQVcsQ0FBQ3hCLENBQUQsQ0FBaEIsRUFBRCxDQUF3QkosR0FBeEIsQ0FBNEIsRUFBNUI7QUFDRDtBQUNGLEdBTk0sQ0FBUDtBQU9ELENBUkQ7QUFVQTs7Ozs7Ozs7QUFNQSxJQUFNZ0MsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdkMsTUFBRCxFQUFrQztBQUFBLE1BQXpCQyxPQUF5Qix1RUFBZixVQUFlO0FBQ3hELFNBQU9DLENBQUMsWUFBS0YsTUFBTCxFQUFELENBQWdCRyxNQUFoQixnR0FDMkJGLE9BRDNCLHlMQUFQO0FBR0QsQ0FKRDtBQU1BOzs7Ozs7OztBQU1BLElBQU11QyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUN4QyxNQUFELEVBQVN5QyxZQUFULEVBQTBCO0FBQy9DLFNBQU92QyxDQUFDLFlBQUtGLE1BQUwsRUFBRCxDQUFnQjBDLElBQWhCLFdBQXdCRCxZQUF4QixFQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7OztBQU1BLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLEVBQThCO0FBQ3hELE1BQU1DLE9BQU8sR0FBRzFDLGFBQWEsQ0FBQ3dDLFVBQUQsQ0FBN0I7QUFDQSxNQUFNRyxVQUFVLEdBQUczQyxhQUFhLENBQUN5QyxZQUFELENBQWhDO0FBRUEsTUFBSUcsVUFBSjs7QUFFQSxNQUFJRixPQUFPLEtBQUtDLFVBQWhCLEVBQTRCO0FBQzFCQyxjQUFVLEdBQUcsS0FBYjtBQUNELEdBRkQsTUFFTztBQUNMQSxjQUFVLEdBQUcsSUFBYjtBQUNEOztBQUVELFNBQU9BLFVBQVA7QUFDRCxDQWJEO0FBZUE7Ozs7Ozs7O0FBTUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2pELE1BQUQsRUFBWTtBQUM3QixTQUFPRSxDQUFDLFlBQUtGLE1BQUwsRUFBRCxDQUFnQjBDLElBQWhCLDRHQUFQO0FBR0QsQ0FKRCIsImZpbGUiOiJsb2dpbn5zaGFyZWR+c2lnbnVwLmVkYjU2YzkwODg1ZmExNmFjMTE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMsIG5vLXVuZGVmICovXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRySWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7dm9pZCB8IGpRdWVyeX1cbiAqL1xuY29uc3QgYWRkRmFpbHVyZUFsZXJ0ID0gKFxuICBhdHRySWQsXG4gIG1lc3NhZ2UgPSAnU29tZXRoaW5nIGZhaWxlZC4gUGxlYXNlIHJldHJ5IGluIGEgZmV3IG1pbnV0ZXMuJ1xuKSA9PiB7XG4gIHJldHVybiAkKGAjJHthdHRySWR9YCkuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LXJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiBPSCBOT09PT08hPC9zdHJvbmc+ICAke21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+IDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj5gKTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgaW4gYW4gaW5wdXQgZmllbGQgKHRleHQsIGRyb3Bkb3ducywgZXRjLikgYW5kIHRyaW1zIHRoZVxuICogd2hpdGUgc3BhY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBnZXRJbnB1dFZhbHVlID0gKGVsZW1lbnRJZCkgPT4ge1xuICBjb25zdCB0cmltbWVkV2hpdGVTcGFjZSA9ICQoYCMke2VsZW1lbnRJZH1gKS52YWwoKTtcbiAgcmV0dXJuIHRyaW1tZWRXaGl0ZVNwYWNlO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYW4gT2JqZWN0XG4gKiBAcGFyYW0gZWxlbWVudElkQXJyYXlcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3QgYnVpbGRPYmplY3QgPSAoZWxlbWVudElkQXJyYXkpID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRJZEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qga2V5ID0gZWxlbWVudElkQXJyYXlbaV07XG4gICAgY29uc3Qga2V5VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGtleSkudHJpbSgpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZvcm1EYXRhLCBrZXksIHtcbiAgICAgIHZhbHVlOiBrZXlWYWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmb3JtRGF0YTtcbn07XG5cbi8qKlxuICogUG9zdHMgSXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7QXJyYXl9IGVsZW1lbnRJZEFycmF5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAqL1xuY29uc3QgcG9zdFNpZ25VcERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gZ2V0SW5wdXRWYWx1ZSgnbmV3LXVzZXJuYW1lJyk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0SW5wdXRWYWx1ZSgnc2lnbnVwLXBhc3N3b3JkJyk7XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ2NvbmZpcm0tcGFzc3dvcmQnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHBvc3RJdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgY29uZmlybVBhc3N3b3JkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcG9zdEl0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBhZGRGYWlsdXJlQWxlcnQoJ3NpZ251cEZvcm0nKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogUG9zdHMgTG9naW5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7QXJyYXl9IGVsZW1lbnRJZEFycmF5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAqL1xuY29uc3QgcG9zdExvZ2luRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSBnZXRJbnB1dFZhbHVlKCd1c2VybmFtZScpO1xuICBjb25zdCBwYXNzd29yZCA9IGdldElucHV0VmFsdWUoJ3Bhc3N3b3JkJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwb3N0SXQgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBvc3RJdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgYWRkRmFpbHVyZUFsZXJ0KCdsb2dpbkZvcm0nKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG4vKipcbiAqXG4gKiBAcGFyYW0gZWxlVG9XYXRjaFxuICogQHBhcmFtIHthcnJheX0gZWxlc1RvQ2xlYXJcbiAqIEByZXR1cm5zIHt2b2lkIHwgalF1ZXJ5fVxuICovXG5jb25zdCBjbGVhcklucHV0T25DbGljayA9IChlbGVUb1dhdGNoLCAuLi5lbGVzVG9DbGVhcikgPT4ge1xuICByZXR1cm4gJChgIyR7ZWxlVG9XYXRjaH1gKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVzVG9DbGVhci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgJChgIyR7ZWxlc1RvQ2xlYXJbaV19YCkudmFsKCcnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJJZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEByZXR1cm5zIHt2b2lkIHwgalF1ZXJ5fVxuICovXG5jb25zdCBhZGRXYXJuaW5nQWxlcnQgPSAoYXR0cklkLCBtZXNzYWdlID0gJ1dhcm5pbmchJykgPT4ge1xuICByZXR1cm4gJChgIyR7YXR0cklkfWApLmFwcGVuZChgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgYWxlcnQtcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4gPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PmApO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgQ29udGVudCBvZiBhbiBIVE1MIEVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRySWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbm5lckNvbnRlbnRcbiAqIEByZXR1cm5zIHsqfHZvaWR8alF1ZXJ5fVxuICovXG5jb25zdCByZXBsYWNlQ29udGVudCA9IChhdHRySWQsIGlubmVyQ29udGVudCkgPT4ge1xuICByZXR1cm4gJChgIyR7YXR0cklkfWApLmh0bWwoYCR7aW5uZXJDb250ZW50fWApO1xufTtcblxuLyoqXG4gKiBDaGVja3MgUGFzc3N3b3JkcyBtYXRjaFxuICogQHBhcmFtIHBhc3N3b3JkSWRcbiAqIEBwYXJhbSBjb25maXJtUHdkSWRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBjaGVja1Bhc3N3b3Jkc01hdGNoID0gKHBhc3N3b3JkSWQsIGNvbmZpcm1Qd2RJZCkgPT4ge1xuICBjb25zdCBtYWluUHdkID0gZ2V0SW5wdXRWYWx1ZShwYXNzd29yZElkKTtcbiAgY29uc3QgY29uZmlybVB3ZCA9IGdldElucHV0VmFsdWUoY29uZmlybVB3ZElkKTtcblxuICBsZXQgZG9Qd2RNYXRjaDtcblxuICBpZiAobWFpblB3ZCAhPT0gY29uZmlybVB3ZCkge1xuICAgIGRvUHdkTWF0Y2ggPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBkb1B3ZE1hdGNoID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkb1B3ZE1hdGNoO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgc3Bpbm5lciBhZnRlciB0aGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cklkXG4gKiBAcmV0dXJucyB7Knx2b2lkfGpRdWVyeX1cbiAqL1xuY29uc3QgYWRkU3Bpbm5lciA9IChhdHRySWQpID0+IHtcbiAgcmV0dXJuICQoYCMke2F0dHJJZH1gKS5odG1sKFxuICAgIGA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4gV29ya2luZy4uLmBcbiAgKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNsZWFySW5wdXRPbkNsaWNrLFxuICBhZGRXYXJuaW5nQWxlcnQsXG4gIGNoZWNrUGFzc3dvcmRzTWF0Y2gsXG4gIGdldElucHV0VmFsdWUsXG4gIHJlcGxhY2VDb250ZW50LFxuICBwb3N0U2lnblVwRGF0YSxcbiAgYnVpbGRPYmplY3QsXG4gIGFkZEZhaWx1cmVBbGVydCxcbiAgYWRkU3Bpbm5lcixcbiAgcG9zdExvZ2luRGF0YVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=