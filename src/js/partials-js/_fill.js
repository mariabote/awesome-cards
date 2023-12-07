'use strict';

//consts

const nombrecompleto = document.querySelector('.js_name');
const work = document.querySelector('.js_work');
const image = document.querySelector('.js_image');
const correo = document.querySelector('.js_email');
const tel = document.querySelector('.js_tel');
const linkLinkedin = document.querySelector('.js_linkedin');
const linkGithub = document.querySelector('.js_github');

const cardTitle= document.querySelector('.js__img_card_title');
const cardSubtitle = document.querySelector('.js__img_card_subtitle');
const cardImage = document.querySelector('.js__img_card_image');

// events

nombrecompleto.addEventListener ('input', (event) => {
    event.preventDefault ();

    // Recoger el valor del Input
       const name = nombrecompleto.value; 
      
    // Poner input en la página:
    cardTitle.innerHTML = name;
})

work.addEventListener ('input', (event) => {
    event.preventDefault ();

    // Recoger el valor del Input
    const job = work.value; 
      
    // Poner input en la página:
    cardSubtitle.innerHTML = job;
})

/*  const photo = image.value; 
    const email = correo.value; 
    const phone = tel.value; 
    const linkedin = linkLinkedin.value; 
    const github = linkGithub.value;*/

    
    

    
    
    