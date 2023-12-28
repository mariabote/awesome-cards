'use strict';
//  VARIABLES
const createButton = document.querySelector('.js_createButton');
const cardCreated = document.querySelector('.js_cardCreated');
const twitterButton = document.querySelector('.js__twitterButton');
let shareResponse = document.querySelector('.js__shareResponse');
let createdResponse = document.querySelector('.js__createdResponse');
const data ={
  palette: '', 
  name: '',
  job: '',
  photo: '',
  phone: '', 
  email: '',
  linkedin: '', 
  githbub:'', 
}

// inputPalette (colores),  createButton botón CREAR
//

//  FUNCIONES
function toggleCardCreated() {
  cardCreated.classList.toggle('hidden');
}

function handleClickCreate() {
 fetch('https://dev.adalab.es/api/card/',
 {method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)})
  .then (response => response.json())
  .then (dataResponse => {
    
    console.log(dataResponse);   
    if ( dataResponse.success) {
      
      createdResponse.innerHTML = shareUrl;
    }
    else {
      //Mensajito error
      shareResponse.innerHTML = 'Debes completar la información para obtener tu tarjeta';
      createdResponse.innerHTML = '';
    }
  });  
}

//  EVENTOS
createButton.addEventListener('click', (event) => {
  event.preventDefault();
  createButton.classList.toggle('clicked');
  toggleCardCreated();
  handleClickCreate();
}); 

twitterButton.addEventListener('click', (event) => {

  // URL y texto a compartir en Twitter
  let shareUrl = 'https://awesome-profile-card.com?id=A456DF0001';
  const shareText = '¡He creado mi nueva tarjeta profesional con Awesome Profile Cards!';

  // Construir el enlace de Twitter con los parámetros necesarios
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  // Abrir una nueva ventana emergente con el enlace de Twitter
  window.open(twitterLink, '_blank', 'width=600,height=600');
});