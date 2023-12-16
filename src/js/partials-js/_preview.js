const cardTitle= document.querySelector('.js__img_card_title');
const cardSubtitle = document.querySelector('.js__img_card_subtitle');
const cardImage = document.querySelector('js__profile-preview');
const resetBtn = document.querySelector('.js__create_profile_card_button');
const iconPhone = document.querySelector('.js__contact1');
const iconEmail = document.querySelector('.js__contact2');
const iconLinkedin = document.querySelector('.js__contact3');
const iconGithub = document.querySelector('.js__contact4');
const completForm = document.querySelector ('.js__form');

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