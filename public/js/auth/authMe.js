// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

/**
 *
 * @param eleToWatch
 * @param {array} elesToClear
 * @returns {void | jQuery}
 */
const clearInputOnClick = (eleToWatch, ...elesToClear) => {
  return $(`#${eleToWatch}`).click((event) => {
    event.preventDefault();

    for (let i = 0; i < elesToClear.length; i += 1) {
      $(`#${elesToClear[i]}`).val('');
    }
  });
};

/**
 *
 * @param {string} attrId
 * @param {string} message
 * @returns {void | jQuery}
 */
const addWarningAlert = (attrId, message = 'Warning!') => {
  return $(`#${attrId}`).append(`<div class="alert alert-warning alert-rounded">
                                  <i class="ti-alert"></i> ${message}
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div>`);
};

/**
 * Replaces the Content of an HTML Element
 * @param {string} attrId
 * @param {string} innerContent
 * @returns {*|void|jQuery}
 */
const replaceContent = (attrId, innerContent) => {
  return $(`#${attrId}`).html(`${innerContent}`);
};

/**
 * Gets the value in an input field (text, dropdowns, etc.) and trims the
 * white space.
 * @param {string} elementId
 * @returns {string}
 */
const getInputValue = (elementId) => {
  const trimmedWhiteSpace = $(`#${elementId}`).val().trim();
  return trimmedWhiteSpace;
};

/**
 * Checks Passswords match
 * @param passwordId
 * @param confirmPwdId
 * @returns {boolean}
 */
const checkPasswordsMatch = (passwordId, confirmPwdId) => {
  const mainPwd = getInputValue(passwordId);
  const confirmPwd = getInputValue(confirmPwdId);

  let doPwdMatch;

  if (mainPwd !== confirmPwd) {
    doPwdMatch = false;
  } else {
    doPwdMatch = true;
  }

  return doPwdMatch;
};

export { clearInputOnClick, addWarningAlert, checkPasswordsMatch, getInputValue, replaceContent };
