

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');




ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
    
});




const links = document.querySelectorAll('.enlaces-menu a');
links.forEach(link => {
link.addEventListener("click", function () {   
    enlaces.classList.remove('activado');
    barras.forEach(child => {child.classList.remove('animado')});
    ham.classList.toggle('girar');
  });
});