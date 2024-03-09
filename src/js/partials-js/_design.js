'use strict';

// QUERY-SELECTOR

const inputPalette = document.querySelectorAll('input[name="palette"]');
const createProfile = document.querySelector('.create__profile');

// VARIABLES DE DATOS GLOBALES

// FUNCIONES

// EVENTOS
for (let i = 0; i < inputPalette.length; i++) {
  inputPalette[i].addEventListener('click', () => {
    createProfile.className = `create__profile ${inputPalette[i].id}`;
    data.palette = inputPalette[i].value;
  })
}

// CÓDIGO CUANDO CARGA LA PÁGINA.
