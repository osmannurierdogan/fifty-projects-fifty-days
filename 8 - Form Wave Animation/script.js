const labels = document.querySelectorAll('.form-control label');
const email_placeholder = document.querySelector('.email-text');
const password_placeholder = document.querySelector('.password-text');


labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('');
});

email_placeholder.addEventListener('focus', () => {
    email_placeholder.placeholder ='sample@gmail.com';
});

password_placeholder.addEventListener('focus', () => {
    password_placeholder.placeholder = '************';
});

email_placeholder.addEventListener('focusout', () => {
    email_placeholder.placeholder = '';
});

password_placeholder.addEventListener('focusout', () => {
    password_placeholder.placeholder = '';
});
