'use strict';

//consts: 

    //-form:
const fullname = document.querySelector('.js_name');

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
    
    data.name = inputName;
})

work.addEventListener ('input', (event) => {
    event.preventDefault ();

    //Insert Input Value:
    const inputJob = work.value; 
   
    // Write input on card:
    cardSubtitle.innerHTML = inputJob;

    data.job = inputJob;
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
    
    