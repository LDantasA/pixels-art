function generatePalette(colors) {
  for (let color of colors) {
    let option = document.createElement('div');
    option.className = 'color';
    option.style.backgroundColor = color;
    document.getElementById('color-palette').appendChild(option);
  }
}

window.onload = function () {
  generatePalette(['black', 'red', 'green', 'blue']);
};
