const tagsElement = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');


textarea.focus();

textarea.addEventListener('keyup', (parameter) => {
    createTags(parameter.target.value);

    if(parameter.key === 'Enter'){
        setTimeout(() => {
            parameter.target.value = '';
        }, 10);

        randomSelect();
    }

})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    console.log(tags);

    tagsElement.innerHTML = '';
    
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100);
    
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}