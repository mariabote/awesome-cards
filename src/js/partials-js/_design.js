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
  // createProfile.className = `create__profile palette${value}`;
  var color_a = getComputedStyle(document.documentElement, null).getPropertyValue(`--color-${value}a`);
  var color_b = getComputedStyle(document.documentElement, null).getPropertyValue(`--color-${value}b`);
  var color_c = getComputedStyle(document.documentElement, null).getPropertyValue(`--color-${value}c`);
  document.documentElement.style.setProperty("--color-a", color_a);
  document.documentElement.style.setProperty("--color-b", color_b);
  document.documentElement.style.setProperty("--color-c", color_c);
  console.log("pollo");
  data.palette = value;
}
