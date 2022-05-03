const search = document.querySelector('.search');
const button = document.querySelector('.button');
const input = document.querySelector('.input');

/* button.addEventListener('mouseover', () => {
    //search.classList.toggle('active');
    search.classList.add('active');
    input.focus();
});

button.addEventListener('mouseleave', () => {
    //search.classList.toggle('active');
    search.classList.remove('active');
    input.focus();
}); */

button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});