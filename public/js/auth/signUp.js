/* eslint-disable import/extensions, no-undef */
import 'regenerator-runtime/runtime.js';

import {
  getInputValue,
  postSignUpData,
  addFailureAlert,
  addSpinner
} from './authMe.js';

$(() => {
  let signupUserName = getInputValue('newUserName');
  let signupPassword = getInputValue('signupPassword');
  let confirmPassword = getInputValue('confirmPassword');

  (async () => {
    while (
      signupUserName === '' ||
      signupPassword === '' ||
      confirmPassword === ''
    ) {
      signupUserName = getInputValue('newUserName');
      signupPassword = getInputValue('signupPassword');
      confirmPassword = getInputValue('confirmPassword');
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }

    return $('#signupBtn').removeAttr('disabled');
  })();

  $('#signupBtn').click(async (event) => {
    event.preventDefault();
    /*
        Steps:
        1. Get the input values for username, password, confirm password
        2. Make sure password and confirm password are the same
        3.
     */
    addSpinner('signupBtn');

    try {
      const backEndResponse = await postSignUpData('/auth/signup');
      console.log(backEndResponse);

      // const { status } = backEndResponse.data;
    } catch (error) {
      console.log(error);

      addFailureAlert('signupForm');
    }
  });
});
