/* eslint-disable import/extensions, no-undef */
import 'regenerator-runtime/runtime.js';

import {
  getInputValue,
  postSignUpData,
  addFailureAlert,
  addSpinner,
  replaceContent,
  addWarningAlert
} from './authMe.js';

$(() => {
  let signupUserName = getInputValue('new-username');
  let signupPassword = getInputValue('signup-password');
  let confirmPassword = getInputValue('confirm-password');

  (async () => {
    while (
      signupUserName === '' ||
      signupPassword === '' ||
      confirmPassword === ''
    ) {
      signupUserName = getInputValue('new-username');
      signupPassword = getInputValue('signup-password');
      confirmPassword = getInputValue('confirm-password');
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }

    return $('#signupBtn').removeAttr('disabled');
  })();

  $('#signupBtn').click(async (event) => {
    event.preventDefault();

    try {
      addSpinner('signupBtn');

      const backEndResponse = await postSignUpData('/auth/signup');

      const { status } = backEndResponse.data;

      if (status !== 'success') {
        addWarningAlert('signupForm', status);
      } else {
        $('#closeSignup').click();
      }

      replaceContent('signupBtn', 'Sign Up');

      $('#new-username').val('');
      $('#signup-password').val('');
      $('#confirm-password').val('');
      // hide signup button
      // display username => 'Welcome username'
    } catch (error) {
      console.log(error);

      replaceContent('signupBtn', 'Sign Up');
      addFailureAlert('signupForm');
    }
  });
});
