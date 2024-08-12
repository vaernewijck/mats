// TODO: fix redirect bug

const countElement = document.querySelector('.count');
let counter = 5;

const countdownInterval = setInterval(() => {
  counter--;

  if (counter > 0) {
    countElement.textContent = `${counter} ${counter > 1 ? ' seconden' : ' seconde'}!`;
  } else {
    window.location.href = 'https://pakske.be/lijst/mats-vaernewijck';
    countElement.textContent = `Let's go!`;

    clearInterval(countdownInterval);
  }
}, 1000);
