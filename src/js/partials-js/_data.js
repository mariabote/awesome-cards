'use strict';

var data = {
    palette: '',
    name: '',
    job: '',
    photo: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
}

function saveData() {
    localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
    data = JSON.parse(localStorage.getItem("data"));
    setFullName(data.name);
    setPosition(data.job);
    setPhone(data.phone);
    setEmail(data.email);
    setLinkedin(data.linkedin);
    setGithub(data.github);
    setImage(data.photo);
    setPalette(data.palette);
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadData();
});