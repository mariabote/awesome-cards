//const cardImagePreview = document.querySelector('.js__profile-preview');

//Funciones

const restoreCard = () => { 

completForm.reset ();
cardTitle.innerHTML = 'Nombre Apellido';
cardSubtitle.innerHTML = 'Front-end developer';
cardImage.classList.add('img-card-image');
cardImage.style.backgroundImage = 'url(../images/card-rata-gafas.jpg)';
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