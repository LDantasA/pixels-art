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

function customBoard(event) {
  const pixelBoard = document.getElementById('pixel-board');
  let size = document.getElementById('board-size').value;
  if (size != '') {
    if (size < 5) {
      size = 5;
    } else if (size > 50) {
      size = 50;
    }
    pixelBoard.innerHTML = null;
    pixelBoard.style.gridTemplateColumns = null;
    generateBoard(size);
  } else {
    alert('Board inválido!');
  }
}

function generateColor() {
  let rgb = [];

  for (i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256);
    rgb.push(color);
  }

  return 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
}

window.onload = function () {
  generatePalette(['black', generateColor(), generateColor(), generateColor()]);
  generateBoard(5);
  document.querySelector('#clear-board').addEventListener('click', boardReset);
  document.querySelector('form').addEventListener('submit', customBoard);
};
