const jokeElement = document.querySelector('#joke');
const jokeButton = document.querySelector('#jokeButton');


async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    
    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;
}

// USING .then  = > syncronus usage 

/* 
    fetch('https://icanhazdadjoke.com', config)
        .then((response) => response.json())
        .then((data) => {
            jokeElement.innerHTML = data.joke;
        });
*/

generateJoke();
jokeButton.addEventListener('click', generateJoke);
