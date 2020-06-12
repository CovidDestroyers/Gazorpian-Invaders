// eslint-disable-next-line import/extensions
import 'regenerator-runtime/runtime.js';

$(() => {
  let userScore;
  let gameOver;

  (async () => {
    while (gameOver !== 'yes') {
      userScore = $('#user-score').text();
      gameOver = $('#game-over').text();
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }
    try {
      // eslint-disable-next-line no-undef,no-unused-vars
      const postIt = await axios.post('/update/score', {
        userScore,
        gameOver
      });

      // console.log(postIt);
    } catch (error) {
      console.log(error);
    }
  })();
});
