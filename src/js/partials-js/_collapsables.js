

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
});

legendDesign.addEventListener('click', designClick);
legendFill.addEventListener('click', fillClick);
legendShare.addEventListener('click', shareClick);
