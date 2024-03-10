

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
});

legendDesign.addEventListener('click', designClick);
legendFill.addEventListener('click', fillClick);
legendShare.addEventListener('click', shareClick);


