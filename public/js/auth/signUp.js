/* eslint-disable import/extensions, no-undef */
import 'regenerator-runtime/runtime.js';

import { getInputValue } from './authMe.js';

$(() => {
  let signupUserName = getInputValue('new-username');
  let signupPassword = getInputValue('signup-password');
  let confirmPassword = getInputValue('confirm-password');

  (async () => {
    while (signupUserName === '' || signupPassword === '' || confirmPassword === '') {
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
    /*
        Steps:
        1. Get the input values for username, password, confirm password
        2. Make sure password and confirm password are the same
        3.
     */
  });
});
