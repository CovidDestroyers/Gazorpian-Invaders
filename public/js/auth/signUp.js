/* eslint-disable import/extensions, no-undef */
import 'regenerator-runtime/runtime.js';

import {
  getInputValue,
  postSignUpData,
  addFailureAlert,
  addSpinner,
  replaceContent,
  addWarningAlert,
  addCardBody
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
      // console.log(backEndResponse);

      const { status } = backEndResponse.data;

      if (status !== 'success') {
        addWarningAlert('signupForm', status);
      } else {
        const { username, highScore } = backEndResponse.data;

        addCardBody('username-card', username, highScore);

        $('#signup').prop('hidden', true);
        $('#login').prop('hidden', true);
        $('#logout').removeAttr('hidden');
        $('#closeSignup').click();
      }

      replaceContent('signupBtn', 'Sign Up');

      $('#new-username').val('');
      $('#signup-password').val('');
      $('#confirm-password').val('');
      // hide signup button
      // display username => 'Welcome username'
    } catch (error) {
      replaceContent('signupBtn', 'Sign Up');
      addFailureAlert('signupForm');
    }
  });
});
