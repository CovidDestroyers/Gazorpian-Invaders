/* eslint-disable import/extensions, no-undef */
import 'regenerator-runtime/runtime.js';

/**
 *
 * @param {string} attrId
 * @param {string} message
 * @returns {void | jQuery}
 */
const addFailureAlert = (
  attrId,
  message = 'Something failed. Please retry in a few minutes.'
) => {
  return $(`#${attrId}`).append(`<div class="alert alert-danger alert-rounded">
                                  <strong> OH NOOOOO!</strong>  ${message}
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>`);
};

/**
 * Gets the value in an input field (text, dropdowns, etc.) and trims the
 * white space.
 * @param {string} elementId
 * @returns {string}
 */
const getInputValue = (elementId) => {
  const trimmedWhiteSpace = $(`#${elementId}`).val();
  return trimmedWhiteSpace;
};

/**
 * Builds an Object
 * @param elementIdArray
 * @returns {{}}
 */
const buildObject = (elementIdArray) => {
  const formData = {};

  for (let i = 0; i < elementIdArray.length; i += 1) {
    const key = elementIdArray[i];
    const keyValue = getInputValue(key).trim();

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
const postSignUpData = async (url) => {
  const username = getInputValue('new-username');
  const password = getInputValue('signup-password');
  const confirmPassword = getInputValue('confirm-password');

  try {
    const postIt = await axios.post(url, {
      username,
      password,
      confirmPassword
    });

    return postIt;
  } catch (error) {
    addFailureAlert('signupForm');
    return error;
  }
};

/**
 * Posts Login
 * @param {String} url
 * @param {Array} elementIdArray
 * @returns {Promise<*>}
 */
const postLoginData = async (url) => {
  const username = getInputValue('username');
  const password = getInputValue('password');

  try {
    const postIt = await axios.post(url, {
      username,
      password
    });

    return postIt;
  } catch (error) {
    // console.log(error);
    addFailureAlert('loginForm');
    return error;
  }
};
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
                                  ${message}
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>`);
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

/**
 * Adds a spinner after the
 *
 * @param {string} attrId
 * @returns {*|void|jQuery}
 */
const addSpinner = (attrId) => {
  return $(`#${attrId}`).html(
    `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Working...`
  );
};

const addCardBody = (attrId, username, score) => {
  return $(`#${attrId}`).html(
    `<div id="user-card-body" class="card-body">
                    <h5 class="card-title">Welcome ${username}!</h5>
                    <p class="card-text"> Your most recent score is: <span style="color: darkorange"> ${score} </span> </p>
                </div>`
  );
};
export {
  clearInputOnClick,
  addWarningAlert,
  checkPasswordsMatch,
  getInputValue,
  replaceContent,
  postSignUpData,
  buildObject,
  addFailureAlert,
  addSpinner,
  postLoginData,
  addCardBody
};
