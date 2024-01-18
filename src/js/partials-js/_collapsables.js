

//VARIABLES

const containerFill = document.querySelector('.js__container_fill');

//FUNCIONES 
function addDesign() {
   containerDesign.classList.add ('collapsed');
   arrowDesign.classList.add ('rotate-icon');
};

function removeDesign() {
   containerDesign.classList.remove ('collapsed');
   arrowDesign.classList.remove ('rotate-icon');
};
   function addFill () {
      containerFill.classList.add ('collapsed');
      arrowFill.classList.add ('rotate-icon');
};

   function removeFill () {
      containerFill.classList.remove ('collapsed');
      arrowFill.classList.remove ('rotate-icon');
};

   function addShare () {
containerShare.classList.add ('collapsed');
arrowShare.classList.add ('rotate-icon');
};

function removeShare() {
   containerShare.classList.remove ('collapsed');
arrowShare.classList.remove ('rotate-icon');
}

function designClick (event) {
  addFill ();
  addShare ();
  removeDesign ();
   };

function fillClick (event) {
   addDesign ();
   addShare ();
   removeFill ();
   };

function shareClick (event) {
      addDesign ();
      addFill ();
      removeShare ();
    };


//EVENTOS
document.addEventListener('DOMContentLoaded' , (event) => {
   addFill ();
   addShare ();
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
