//  VARIABLES
const createButton = document.querySelector('.js_createButton');
const cardCreated = document.querySelector('.js_cardCreated');
const twitterButton = document.querySelector('.js__twitterButton');

//  FUNCIONES
function toggleCardCreated() {
  cardCreated.classList.toggle('hidden');
}
//  EVENTOS
createButton.addEventListener('click', (event) => {
  event.preventDefault();
  createButton.classList.toggle('clicked');
  toggleCardCreated();
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