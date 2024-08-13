const countElement = document.querySelector('.count');
let counter = 5;


const countdownInterval = setInterval(() => {
  counter--;

  if (counter > 0) {
    countElement.textContent = `${counter} ${counter > 1 ? ' seconden' : ' seconde'}!`;
  } else {
    const coundown = document.querySelector('.countdown');
    coundown.innerHTML = '<a href="https://pakske.be/lijst/mats-vaernewijck">geboortelijst</a>';

    window.location.assign('https://pakske.be/lijst/mats-vaernewijck');
    clearInterval(countdownInterval);
  }
}, 1000);

