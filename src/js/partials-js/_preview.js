const cardTitle= document.querySelector('.js__img_card_title');
const cardSubtitle = document.querySelector('.js__img_card_subtitle');
const cardImage = document.querySelector('js__profile-preview');
const resetBtn = document.querySelector('.js__create_profile_card_button');
const iconPhone = document.querySelector('.js__contact1');
const iconEmail = document.querySelector('.js__contact2');
const iconLinkedin = document.querySelector('.js__contact3');
const iconGithub = document.querySelector('.js__contact4');
const completForm = document.querySelector ('.js__form');
const resetCard = document.querySelector('.js__create_profile_card_content').innerHTML;
//Funciones

const restoreCard = () => { 

completForm.reset ();
cardTitle.innerHTML = 'Nombre Apellido';
cardSubtitle.innerHTML = 'Front-end developer';
cardImage.classList.add ('img-card-image');
iconPhone.href = '';
iconEmail.href = '';
iconLinkedin.href = '';
iconGithub.href = '';
/* document.querySelector('.js__create_profile_card_content').innerHTML = resetCard; */ //rstaura y no me coge de nuevo la funcion nombreCompleto.value
// otra opción: refrescar la página completa
}

const handleClickReset = (event) => {
   event.preventDefault ();
   restoreCard ();
   /* location.reload (); */ //no utilizar
  /*  writeName (); */  //descomentar en fill.js
}

//Eventos
resetBtn.addEventListener('click', handleClickReset);