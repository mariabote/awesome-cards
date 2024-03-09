

//VARIABLES

const containerFill = document.querySelector('.js__container__fill');

//FUNCIONES 
function addDesign() {
   containerDesign.classList.add('display__none');
   arrowDesign.classList.add('rotate__icon');
};
function removeDesign() {
   containerDesign.classList.remove('display__none');
   arrowDesign.classList.remove('rotate__icon');
};

function addFill() {
   containerFill.classList.add('display__none');
   arrowFill.classList.add('rotate__icon');
};
function removeFill() {
   containerFill.classList.remove('display__none');
   arrowFill.classList.remove('rotate__icon');
};

function addShare() {
   containerShare.classList.add('display__none');
   arrowShare.classList.add('rotate__icon');
};
function removeShare() {
   containerShare.classList.remove('display__none');
   arrowShare.classList.remove('rotate__icon');
}

function designClick(event) {
   addFill();
   addShare();
   removeDesign();
};

function fillClick(event) {
   addDesign();
   addShare();
   removeFill();
};

function shareClick(event) {
   addDesign();
   addFill();
   removeShare();
};


//EVENTOS
document.addEventListener('DOMContentLoaded', (event) => {
   addFill();
   addShare();
   const storedName = localStorage.getItem('name');
   if (storedName) {
      fullname.value = storedName;
      cardTitle.innerHTML = storedName;
   }
   const storedJob = localStorage.getItem('job');
   if (storedJob) {
      work.value = storedJob;
      work.innerHTML = storedJob;
   }
   const storedEmail = localStorage.getItem('email');
   if (storedEmail) {
      email.value = storedEmail;
   }
   const storedLinkedIn = localStorage.getItem('linkedIn');
   if (storedLinkedIn) {
      linkedin.value = storedLinkedIn;
   }
   const storedGithub = localStorage.getItem('github');
   if (storedGithub) {
      github.value = storedGithub;
   }
   const storedPhone = localStorage.getItem('phone');
   if (storedPhone) {
      tel.value = storedPhone;
   }
});

legendDesign.addEventListener('click', designClick);
legendFill.addEventListener('click', fillClick);
legendShare.addEventListener('click', shareClick);


