'use strict';

//consts: 

    //-form:
const fullname = document.querySelector('.js__name');

    //-links: 
const linkEmail = document.querySelector('.js__link__email');
const linkPhone = document.querySelector('.js__link__phone');
const linkLinkedin = document.querySelector('.js__link__linkedin');
const linkGithub = document.querySelector('.js__link__github');

// events

fullname.addEventListener ('input', (event) => {
    event.preventDefault ();

//Insert Input Value:
const inputName = fullname.value;
   
    // Write input on card:
    cardTitle.innerHTML = inputName;
    
    data.name = inputName;
    localStorage.setItem("name", inputName);
})

/* const writeName = (event) =>{
    event.preventDefault ();
    const name = fullname.value; 
   cardTitle.innerHTML = name;
} */
/* nombrecompleto.addEventListener ('input' , writeName); */

work.addEventListener ('input', (event) => {
    event.preventDefault ();

    //Insert Input Value:
    const inputJob = work.value; 
   
    // Write input on card:
    cardSubtitle.innerHTML = inputJob;

    data.job = inputJob;
    localStorage.setItem("job", inputJob);
})

linkEmail.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputEmail = 'mailto:' + email.value;
    
  
    //Open email: 
    window.location.href = inputEmail;
})

email.addEventListener('input', (event) => {
  event.preventDefault ();
  const inputEmailForm = email.value;
  data.email = inputEmailForm;
  localStorage.setItem("email", inputEmailForm);
});
    
linkLinkedin.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputLinkedin = 'https://www.' + linkedin.value;
    
    //Open url: 
    window.open(inputLinkedin, '_blank');
})

linkedin.addEventListener('input', (event) => {
    event.preventDefault ();
    const inputLinkedinForm = linkedin.value;
    data.linkedin = inputLinkedinForm;
    localStorage.setItem("linkedIn", inputLinkedinForm);
});

linkGithub.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputGithub = 'https://github.com'+ github.value.replace('@', '/');

    //Open url: 
    window.open(inputGithub, '_blank');

})

github.addEventListener('input', (event) => {
    event.preventDefault ();
    const inputGithubForm = github.value;
    data.github = inputGithubForm;
    localStorage.setItem("github", inputGithubForm);
});

linkPhone.addEventListener('click', (event) =>{
    event.preventDefault ();

    //Insert Input Value:
    const inputPhone = telephone.value; 

    //Open tel: 
    window.location.href = 'tel:'+ inputPhone;

})

tel.addEventListener('input', (event) => {
    event.preventDefault ();
    const inputTel = tel.value;
    data.phone = inputTel;
    localStorage.setItem("phone", inputTel);
});

    