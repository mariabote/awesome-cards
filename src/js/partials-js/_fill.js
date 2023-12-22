'use strict';

//consts: 

    //-form:
const fullname = document.querySelector('.js_name');
const work = document.querySelector('.js_work');
const image = document.querySelector('.js__profile-upload-btn');
const email = document.querySelector('.js_email');
const telephone = document.querySelector('.js_tel');
const linkedin = document.querySelector('.js_linkedin');
const github = document.querySelector('.js_github');

    //-image:
const cardTitle= document.querySelector('.js__img_card_title');
const cardSubtitle = document.querySelector('.js__img_card_subtitle');
const cardImage = document.querySelector('.js__profile-preview');

    //-links: 
const linkEmail = document.querySelector('.js__link_email');
const linkPhone = document.querySelector('.js__link_phone');
const linkLinkedin = document.querySelector('.js__link_linkedin');
const linkGithub = document.querySelector('.js__link_github');

// events

fullname.addEventListener ('input', (event) => {
    event.preventDefault ();

    //Insert Input Value:
    const inputName = fullname.value;
   
    // Write input on card:
    cardTitle.innerHTML = inputName;
})

work.addEventListener ('input', (event) => {
    event.preventDefault ();

    //Insert Input Value:
    const inputJob = work.value; 
   
    // Write input on card:
    cardSubtitle.innerHTML = inputJob;
})

linkEmail.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputEmail = 'mailto:' + email.value;

    //Open email: 
    window.location.href = inputEmail;

})
    
linkLinkedin.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputLinkedin = 'https://www.' + linkedin.value;

    //Open url: 
    window.open(inputLinkedin, '_blank');

})

linkGithub.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputGithub = 'https://github.com'+ github.value.replace('@', '/');

    //Open url: 
    window.open(inputGithub, '_blank');

})

linkPhone.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputPhone = telephone.value; 

    //Open tel: 
    window.location.href = 'tel:'+ inputPhone;

})
    
    