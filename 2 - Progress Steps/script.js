
const progress = document.querySelector('#progress');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

let nextButtonFunction = () => {
    nextButton.addEventListener('click', () => {
        currentActive++;
        if(currentActive > circles.length){
            currentActive = circles.length;
        }
        update();
    });
}

let previousButtonFunction = () => {
    previousButton.addEventListener('click', () => {
        currentActive--;
        if(currentActive < 1){
            currentActive = 1;
        }
        update();
    });
}

let addRemoveActiveClass = () => {
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
}

let checkClickabilityStatus = () => {
    if(currentActive === 1){
        previousButton.disabled = true;
    } else if(currentActive === circles.length){
        nextButton.disabled = true;
    } else{
        previousButton.disabled = false;
        nextButton.disabled = false;
    }
}

let update = () => {
    addRemoveActiveClass();
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    checkClickabilityStatus();
};

let main = () => {
    nextButtonFunction();
    previousButtonFunction();
}

main();