let eventKey = document.querySelector('.eventKey');
let eventKeyCode = document.querySelector('.eventKeyCode');
let eventCode = document.querySelector('.eventCode');
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (event) => {
    // console.log(event);
    insert.innerHTML = `
    <div class="key">
        <span class="eventKey">${event.key === ' ' ? 'Space' : event.key}</span>
        <small>event.key</small>
    </div>

    <div class="key">
        <span class="eventKeyCode">${event.keyCode}</span>
        <small>event.keyCode</small>
    </div>

    <div class="key">
        <span class="eventCode">${event.code}</span>
        <small>event.code</small>
    </div>
    `;

    /* 
    if (event.key === " ") {
        eventKey.innerHTML = 'Space';
    } else {
        eventKey.innerHTML = event.key;
    }
    eventKeyCode.innerHTML = event.keyCode;
    eventCode.innerHTML = event.code;
    */
});