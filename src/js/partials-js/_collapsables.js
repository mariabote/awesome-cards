
//VARIABLES

const fieldsetDesign = document.querySelector('.js__fieldset_design');
const legendDesign = document.querySelector('.js__legend_design');
const containerDesign = document.querySelector('.js__container_design');
const arrowDesign = document.querySelector('.js__arrow_icon_design');
const fieldsetFill = document.querySelector('.js__fieldset_fill');
const legendFill = document.querySelector('.js__legend_fill');
const containerFill = document.querySelector('.js__container_fill');
const arrowFill = document.querySelector('.js__arrow_icon_fill');
const containerShare = document.querySelector('.js__container_share');
const fieldsetShare = document.querySelector('.js__fieldset_share');
const legendShare = document.querySelector('.js__legend_share');
const arrowShare = document.querySelector('.js__arrow_icon_share');

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
   containerFill.classList.add ('collapsed');
   arrowFill.classList.add ('rotate-icon');
   containerShare.classList.add ('collapsed');
   arrowShare.classList.add ('rotate-icon');
});

legendDesign.addEventListener('click', designClick);
legendFill.addEventListener('click', fillClick);
legendShare.addEventListener('click', shareClick);
