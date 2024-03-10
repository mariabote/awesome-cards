'use strict';

const linkEmail = document.querySelector('.js__link__email');
const linkPhone = document.querySelector('.js__link__phone');
const linkLinkedin = document.querySelector('.js__link__linkedin');
const linkGithub = document.querySelector('.js__link__github');

const events = [
    { "input": fullname, "setter": setFullName },
    { "input": position, "setter": setPosition },
    { "input": email, "setter": setEmail },
    { "input": phone, "setter": setPhone },
    { "input": linkedin, "setter": setLinkedin },
    { "input": github, "setter": setGithub },
]

function setFullName(value) {
    cardTitle.innerHTML = value;
    fullname.value = value;
    data.name = value;
}

function setPosition(value) {
    cardSubtitle.innerHTML = value;
    position.value = value;
    data.job = value;
}

function setEmail(value) {
    email.value = value;
    data.email = value;
}

function setPhone(value) {
    phone.value = value;
    data.phone = value;
}

function setLinkedin(value) {
    linkedin.value = value;
    data.linkedin = value;
}

function setGithub(value) {
    value = value.replace('@', '')
    github.value = value;
    data.github = value;
}

events.forEach(item => {
    item.input.addEventListener('input', (event) => {
        event.preventDefault();
        item.setter(item.input.value);
        saveData();
    })
});

linkEmail.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'mailto:' + email.value;
})

linkLinkedin.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.' + linkedin.value, '_blank');
})

linkGithub.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(inputGithub, 'https://github.com' + github.value.replace('@', '/'));
})

linkPhone.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'tel:' + telephone.value;
})