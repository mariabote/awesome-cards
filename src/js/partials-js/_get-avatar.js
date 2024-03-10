'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile__upload__btn');
const profileImage = document.querySelector('.js__profile__image');
const profilePreview = document.querySelector('.js__profile__preview');

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  setImage(fr.result);
  saveData();
}

function setImage(value) {
  if (value === '') return;
  profileImage.style.backgroundImage = `url(${value})`;
  profilePreview.style.backgroundImage = `url(${value})`;
  data.photo = value;
}

fileField.addEventListener('change', getImage);