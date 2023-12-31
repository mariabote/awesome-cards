'use strict';
//  VARIABLES
const createButton = document.querySelector('.js_createButton');
const cardCreated = document.querySelector('.js_cardCreated');
const twitterButton = document.querySelector('.js__twitterButton');
let shareResponse = document.querySelector('.js__shareResponse');
let createdResponse = document.querySelector('.js__createdResponse');
let shareUrl = '';
// DESIGN
const inputPalette = document.querySelectorAll('input[name="palette"]');
// FILL
const fullname = document.querySelector('.js_name');
const work = document.querySelector('.js_work');
const image = document.querySelector('.js__profile-upload-btn');
const email = document.querySelector('.js_email');
const telephone = document.querySelector('.js_tel');
const linkedin = document.querySelector('.js_linkedin');
const github = document.querySelector('.js_github');

//  FUNCIONES
function toggleCardCreated() {
  cardCreated.classList.toggle('hidden');
}

function handleClickCreate() {
  const selectedPalette = Array.from(inputPalette).find(input => input.checked);
  const selectedPaletteValue = selectedPalette ? selectedPalette.value : '';
  console.log('PALETA SELECCIONADA', selectedPaletteValue);
  const data ={
    palette: selectedPaletteValue,
    name: fullname.value,
    job: work.value,
    photo: image.value,
    phone: telephone.value, 
    email: email.value,
    linkedin: linkedin.value, 
    github: github.value.replace('@', ''), 
  };
 fetch('https://dev.adalab.es/api/card/',
 {method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)})
  .then (response => response.json())
  .then (dataResponse => {
    
    console.log(dataResponse);   
    if (dataResponse.success) {
      createdResponse.innerHTML = shareUrl;
    }
    else {
      //Mensajito error
      shareResponse.innerHTML = 'Debes completar la información para obtener tu tarjeta';
      createdResponse.innerHTML = shareUrl='';
    }
  });  
}

//  EVENTOS
createButton.addEventListener('click', (event) => {
  event.preventDefault();
  createButton.classList.toggle('clicked');
  toggleCardCreated();
  console.log(handleClickCreate);
  handleClickCreate();
}); 

twitterButton.addEventListener('click', (event) => {

  // URL y texto a compartir en Twitter
  shareUrl = '';
  const shareText = '¡He creado mi nueva tarjeta profesional con Awesome Profile Cards!';

  // Construir el enlace de Twitter con los parámetros necesarios
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  // Abrir una nueva ventana emergente con el enlace de Twitter
  window.open(twitterLink, '_blank', 'width=600,height=600');
});