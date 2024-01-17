'use strict';
//  VARIABLES
const twitterButton = document.querySelector('.js__twitterButton');
let shareResponse = document.querySelector('.js__shareResponse');
let createdResponse = document.querySelector('.js__createdResponse');
let shareUrl = '';

//  FUNCIONES
function toggleCardCreated() {
  cardCreated.classList.toggle('hidden');
}

function handleClickCreate() {
  data.email = email.value;
  data.phone = phone.value;
  data.linkedin = linkedin.value;
  data.github = github.value.replace('@', '');
 fetch('https://dev.adalab.es/api/card/',
 {method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)})
  .then (response => response.json())
  .then (dataResponse => {
    
    console.log(dataResponse);   
    if (dataResponse.success) {
      createdResponse.innerHTML = dataResponse;
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
  handleClickCreate();
}); 

function twitterBtnClick() {
twitterButton.addEventListener('click', (event) => {

  // URL y texto a compartir en Twitter
  shareUrl = dataResponse;
  const shareText = '¡He creado mi nueva tarjeta profesional con Awesome Profile Cards!';

  // Construir el enlace de Twitter con los parámetros necesarios
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  // Abrir una nueva ventana emergente con el enlace de Twitter
  window.open(twitterLink, '_blank', 'width=600,height=600');
});
}
twitterBtnClick();