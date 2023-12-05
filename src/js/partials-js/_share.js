//  VARIABLES
const createButton = document.querySelector('.js_createButton');
const cardCreated = document.querySelector('.js_cardCreated');

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

