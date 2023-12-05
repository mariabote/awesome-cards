'use strict';

//consts

const nombrecompleto = document.querySelector('.js_name');
const work = document.querySelector('.js_work');
const image = document.querySelector('.js_image');
const correo = document.querySelector('.js_email');
const tel = document.querySelector('.js_tel');
const linkLinkedin = document.querySelector('.js_linkedin');
const linkGithub = document.querySelector('.js_github');


// events

createButton.addEventListener ('input', (event) => {
    
    // Recoger el valor del Input
   
    info.name = nombrecompleto.value; 
    const job = work.value; 
    const photo = image.value; 
    const email = correo.value; 
    const phone = tel.value; 
    const linkedin = linkLinkedin.value; 
    const github = linkGithub.value;

})

// poner el mensaje en la pagina: info.name.innerHTML = name; Pantallazos 2.2;
