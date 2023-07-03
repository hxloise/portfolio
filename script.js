//get current date
let currentDateElement = document.getElementById('current-date');
let currentDate = new Date();
let formattedDate = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();

currentDateElement.textContent = formattedDate;


//random position
let letters = ['M', 'Y', 'W', 'O', 'R', 'K'];
let container = document.getElementById('c-text-animation');

function updateLetterPositions() {
  const containerHeight = container.clientHeight - parseInt(getComputedStyle(container).paddingTop) - parseInt(getComputedStyle(container).paddingBottom);

  for (let index = 0; index < letters.length; index++) {
    let letter = container.children[index];
    let letterHeight = letter.getBoundingClientRect().height;
    let emptySpace = containerHeight - letterHeight;
    let position = Math.floor(Math.random() * (emptySpace + 1));

    letter.style.position = "relative";
    letter.style.top = position + "px";
  }
}

function resizeHandler() {
  updateLetterPositions();
}

window.addEventListener('load', () => {
  updateLetterPositions();
});

window.addEventListener('resize', resizeHandler);

for (let index = 0; index < letters.length; index++) {
  let newLetter = document.createElement("img");
  newLetter.src = 'assets/letters/' + letters[index] + '.svg';

  const startPercentage = 100;
  const endPercentage = 10;
  const sizeRange = startPercentage - endPercentage;
  const size = startPercentage - (index * (sizeRange / (letters.length - 1)));

  newLetter.style.height = size + "%";

  container.appendChild(newLetter);
}


//click events for social links
document.addEventListener('DOMContentLoaded', () => {
  let clickableDivs = document.querySelectorAll('.bottom-social');
  clickableDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      let url = div.dataset.url;
      window.open(url, '_blank');
    });
  });
});

//animation letters links, only for desktop
let containerLettersRandom = document.getElementsByClassName('bottom-social')

for (const item of containerLettersRandom) {
  let paragraph = item.childNodes[1]
  let name = item.dataset.name

  item.addEventListener('mouseenter', () => {
    if (item.clientWidth > 268) {
      name === "Linkedin" ? paragraph.innerHTML = "https://linkedin.com/in/héloïse-cuche" : paragraph.innerHTML = item.dataset.url;
      paragraph.style.opacity = "100%";
      paragraph.style.fontStyle = "italic";
      item.style.cursor = "pointer";
    }
  })

  item.addEventListener('mouseleave', () => {
    paragraph.innerHTML = name
    paragraph.style.opacity = "100%";
    paragraph.style.fontStyle = "normal";
  })
}

/**
  * Maybe one day
  * let randomLetters = ['M', 'Y', 'W', 'O', 'R', 'K'];
  *  let letter = ['M', 'Y', 'W', 'O', 'R', 'K'];
  * let container = document.getElementById('c-text-animation');
  * 
  * let intervalId = setInterval(() => {
  * randomLetters.unshift(randomLetters.pop());
  * container.innerHTML = randomLetters.map((letter, index) => `<img src="assets/${letter}.svg" style="height: ${100 - index * 15}%">`).join('');
  * }, 100);
  * 
  * setTimeout(() => {
  * clearInterval(intervalId);
  * container.innerHTML = letter.map((letter, index) => `<img src="assets/${letter}.svg" style="height: ${100 - index * 15}%">`).join('');
  * }, 2000);
  * 
*/

