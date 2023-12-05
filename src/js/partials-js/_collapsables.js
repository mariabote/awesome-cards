'use strict'

//VARIABLES

const fieldsetDesign = document.querySelector('.js__fieldset_design');
const legendDesign = document.querySelector('.js__legend_design');
const containerDesign = document.querySelector('.js__container_design');
const arrowDesign = document.querySelector('.js__arrow_icon_design');
const fieldsetFill = document.querySelector('.js__fieldset_fill');
const legendFill = document.querySelector('.js__legend_fill');
const containerForm = document.querySelector('.js__container_form');
const arrowFill = document.querySelector('.js__arrow_icon_fill');
const containerShare = document.querySelector('.js__container_share');
const fieldsetShare = document.querySelector('.js__fieldset_share');
const legendShare = document.querySelector('.js__legend_share');
const arrowShare = document.querySelector('.js__arrow_icon_share');

//FUNCIONES 


//PRUEBAS //

/* function toggleCollapsed (container) { 
   `${container}`.classList.toggle ('collapsed');
}
function toggleArrow (arrow) {
   `${arrow}`.classList.toggle ('rotate-icon'); 
}
 */

//EVENTOS

legendDesign.addEventListener('click', (event) => {
 if (containerForm.classList === ('collapsed') || containerShare.classList === ('collapsed')) {
   containerDesign.classList.toggle ('collapsed');
   arrowDesign.classList.toggle ('rotate-icon');
}
else {
   containerForm.classList.add ('collapsed');
   containerShare.classList.add ('collapsed');
   containerDesign.classList.toggle ('collapsed');
   arrowDesign.classList.toggle ('rotate-icon');
}
 });

 legendFill.addEventListener('click', (event) => {
   if (containerDesign.classList === ('collapsed') || containerShare.classList === ('collapsed')) {
     containerForm.classList.toggle ('collapsed');
     arrowFill.classList.toggle ('rotate-icon');}
  else {
     containerDesign.classList.add ('colapsed');
     containerShare.classList.add ('collapsed');
     containerForm.classList.toggle ('collapsed');
     arrowFill.classList.toggle ('rotate-icon');
  }
   });

 legendShare.addEventListener('click', (event) => {
   if (containerDesign.classList === ('collapsed') || containerForm.classList === ('collapsed')) {
     containerShare.classList.toggle ('collapsed');
     arrowShare.classList.toggle ('rotate-icon');}
  else {
     containerDesign.classList.add ('colapsed');
     containerForm.classList.add ('collapsed');
     containerShare.classList.toggle ('collapsed');
     arrowShare.classList.toggle ('rotate-icon');
  }
   });

   

//PRUEBAS //

/* function designClick () {
   containerDesign.classList.toggle ('collapsed');
   arrowDesign.classList.toggle ('rotate-icon');
   }
function fillClick () {
   containerForm.classList.toggle ('collapsed');
   arrowFill.classList.toggle ('rotate-icon');
   }
function shareClick () {
   containerShare.classList.toggle ('collapsed');
   arrowShare.classList.toggle ('rotate-icon');
   } */


/* legendDesign.addEventListener ('click' , designClick);
legendFill.addEventListener ('click' , fillClick);
legendShare.addEventListener ('click' , shareClick); */