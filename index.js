import { plot } from './data/plot.js';

const mainElement = document.querySelector('.wrapper');

mainElement.innerHTML = plot
  .map(element => {
    return `
    <div class="replica">
      <p class="id">${element.id}</p>
      <p class="act">${element.act}</p>
      <p class="scene">${element.scene}</p>
      <p class="character">${element.character}</p>
      <p class="text">${element.text}</p>
    </div>
    `
  })
  .join('');