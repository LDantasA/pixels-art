function generatePalette(colors) {
  const colorpalette = document.getElementById('color-palette');

  for (let color of colors) {
    let element = document.createElement('div');
    element.className = 'color';
    element.style.backgroundColor = color;
    colorpalette.appendChild(element);
    element.addEventListener('click', colorSelector);
  }

  colorpalette.firstChild.classList.add('selected');
}

function generateBoard(size) {
  const pixelBoard = document.getElementById('pixel-board');

  for (let line = 0; line < size; line++) {
    pixelBoard.style.gridTemplateColumns += ' auto';
    for (let pixel = 0; pixel < size; pixel++) {
      let element = document.createElement('div');
      element.className = 'pixel';
      pixelBoard.appendChild(element);
    }
  }
}

function colorSelector(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];

  if (selectedColor != undefined) {
    selectedColor.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

window.onload = function () {
  generatePalette(['black', 'red', 'green', 'blue']);
  generateBoard(5);
};
