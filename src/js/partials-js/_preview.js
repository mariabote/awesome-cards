//const cardImagePreview = document.querySelector('.js__profile-preview');

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

}

const handleClickReset = (event) => {
   event.preventDefault ();
   restoreCard ();
}

//Eventos
resetBtn.addEventListener('click', handleClickReset);