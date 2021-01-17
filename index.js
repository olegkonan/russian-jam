import { plot } from './data/plot.js';

const mainElement = document.querySelector('.wrapper');

mainElement.innerHTML = plot
  .map(element => {
    if (element.isDescription === true) {
      return `
        <div class="replica">
          <p class="text description">${element.text}</p>
        </div>`
    } else {
      return `
        <div class="replica">
          <p class="id">${element.id}</p>
          <p class="act">${element.act}</p>
          <p class="scene">${element.scene}</p>
          <p class="character">${element.character}</p>
          <p class="text">${element.text}</p>
        </div>`
    }
  })
  .join('');

function savePosition() {
  localStorage.setItem('offsetY', window.scrollY);
}

window.addEventListener('load', () => window.scrollTo(0, localStorage.getItem('offsetY') || 0));
window.addEventListener('scroll', savePosition);