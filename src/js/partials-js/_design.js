'use strict';

const inputPalette = document.querySelectorAll('input[name="palette"]');
const createProfile = document.querySelector('.create__profile');

for (let i = 0; i < inputPalette.length; i++) {
  inputPalette[i].addEventListener('click', () => {
    setPalette(inputPalette[i].value);
    saveData();
  })
}

function setPalette(value) {
  document.getElementById(`palette${value}`).checked = true;
  createProfile.className = `create__profile palette${value}`;
  data.palette = value
}