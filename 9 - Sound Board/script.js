const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelector('#buttons');

sounds.forEach(sound => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button');

    buttonElement.innerText = sound;
    buttonElement.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    buttons.appendChild(buttonElement);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currenTime = 0;
    })
}