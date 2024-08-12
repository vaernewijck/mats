const countElement = document.querySelector('.count');
let counter = 4;

const countdownInterval = setInterval(() => {
  counter--;
  if (counter > 0) {
    countElement.textContent = `${counter} ${counter > 1 ? ' seconden' : ' seconde'}!`;
  } else {
    window.location.href = 'https://pakske.be/lijst/mats-vaernewijck';
    clearInterval(countdownInterval);
  }
}, 1000);
