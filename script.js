function generatePalette(colors) {
  const colorPalette = document.getElementById('color-palette');

  for (let color of colors) {
    let element = document.createElement('div');
    element.className = 'color';
    element.style.backgroundColor = color;
    colorPalette.appendChild(element);
    element.addEventListener('click', colorSelector);
  }

  colorPalette.firstChild.classList.add('selected');
}

function generateBoard(size) {
  const pixelBoard = document.getElementById('pixel-board');

  for (let line = 0; line < size; line++) {
    pixelBoard.style.gridTemplateColumns += ' auto';
    for (let pixel = 0; pixel < size; pixel++) {
      let element = document.createElement('div');
      element.className = 'pixel';
      pixelBoard.appendChild(element);
      element.addEventListener('click', pixelColorizer);
    }
  }
}

function colorSelector(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];

  selectedColor.style.height = null;
  selectedColor.style.width = null;
  selectedColor.classList.remove('selected');

  event.target.classList.add('selected');
  event.target.style.height = '33px';
  event.target.style.width = '33px';
}

function pixelColorizer(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function boardReset() {
  const pixels = document.getElementsByClassName('pixel');

  for (let pixel of pixels) {
    pixel.style.backgroundColor = null;
  }
}

window.onload = function () {
  generatePalette(['black', 'red', 'green', 'blue']);
  generateBoard(5);
  document.getElementById('clear-board').addEventListener('click', boardReset);
};
