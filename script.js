function generatePalette(colors) {
  for (let color of colors) {
    let element = document.createElement('div');
    element.className = 'color';
    element.style.backgroundColor = color;
    document.getElementById('color-palette').appendChild(element);
  }
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

window.onload = function () {
  generatePalette(['black', 'red', 'green', 'blue']);
  generateBoard(5);
};
