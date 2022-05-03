
document.querySelector('#open').addEventListener('click', () => {
    document.querySelector('.container').classList.add('show-nav');
    console.log('Class Added.');
});

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('show-nav');
    console.log('Class Removed.');
});
