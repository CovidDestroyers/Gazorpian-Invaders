// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

import { replaceContent } from './authMe';

const sendLogOutRequest = async () => {
  try {
    // eslint-disable-next-line no-undef
    const logMeOut = axios.post('/logout', {
      message: 'Log me out!'
    });

    return logMeOut;
  } catch (error) {
    return error;
  }
};

$('#logout').click(async (event) => {
  event.preventDefault();
  try {
    await sendLogOutRequest();
    replaceContent('username-card', '');
    // eslint-disable-next-line no-restricted-globals
    return location.reload();
  } catch (error) {
    return error;
  }
});
