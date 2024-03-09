'use strict';
//  VARIABLES
const twitterButton = document.querySelector('.js__twitterButton');
let shareResponse = document.querySelector('.js__shareResponse');
let createdResponse = document.querySelector('.js__createdResponse');
let shareUrl = '';
let dataResponse;

//  FUNCIONES
function toggleCardCreated() {
  cardCreated.classList.toggle('hidden');
}

function handleClickCreate() {
  data.email = email.value;
  data.phone = tel.value;
  data.linkedin = linkedin.value;
  data.github = github.value.replace('@', '');

  fetch('https://dev.adalab.es/api/card/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dataResponse => {

      shareUrl = dataResponse.cardURL;

      console.log(dataResponse);
      if (dataResponse.success) {
        shareResponse.innerHTML = 'Card has been created';
        createdResponse.innerHTML = shareUrl;
      }
      else {
        //Mensajito error
        shareResponse.innerHTML = 'Complete all information to get your card';
        createdResponse.innerHTML = shareUrl = '';
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
  handleClickCreate();
  // URL y texto a compartir en Twitter
  shareUrl;
  const shareText = "¡I've created my proffesional card with Awesome Profile Cards!";

  // Construir el enlace de Twitter con los parámetros necesarios
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  // Abrir una nueva ventana emergente con el enlace de Twitter
  window.open(twitterLink, '_blank', 'width=600,height=600');
});

