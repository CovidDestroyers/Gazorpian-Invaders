/* eslint-disable import/extensions, no-undef */
import 'regenerator-runtime/runtime.js';

import {
  getInputValue,
  postLoginData,
  addFailureAlert,
  addSpinner,
  replaceContent,
  addWarningAlert,
  addCardBody
} from './authMe.js';

$(() => {
  let userName = getInputValue('username');
  let password = getInputValue('password');

  (async () => {
    while (userName === '' || password === '') {
      userName = getInputValue('username');
      password = getInputValue('password');
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }

    return $('#loginBtn').removeAttr('disabled');
  })();

  $('#loginBtn').click(async (event) => {
    event.preventDefault();

    try {
      addSpinner('loginBtn');

      const backEndResponse = await postLoginData('/auth/login');

      const { status } = backEndResponse.data;

      if (status !== 'success') {
        addWarningAlert('loginForm', status);
      } else {
        const { username, highScore } = backEndResponse.data;

        addCardBody('username-card', username, highScore);

        $('#signup').prop('hidden', true);
        $('#login').prop('hidden', true);
        $('#logout').removeAttr('hidden');

        $('#loginClose').click();
      }

      replaceContent('loginBtn', 'Sign Up');

      $('#username').val('');
      $('#password').val('');
      // display username => 'Welcome username'
    } catch (error) {
      replaceContent('loginBtn', 'Login');
      addFailureAlert('loginForm');
    }
  });
});
