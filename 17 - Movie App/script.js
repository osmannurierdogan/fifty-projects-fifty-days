//const API_KEY = "f851ac7422875e1ac5a872a2f0c18811";
const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f851ac7422875e1ac5a872a2f0c18811&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=f851ac7422875e1ac5a872a2f0c18811&query="';

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

// Get initial movies;
getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement("div");
        movieElement.innerHTML = 
        movieElement.classList.add("movie");
        movieElement.innerHTML = 
        `
            <img src="${IMAGE_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>${title}</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieElement);
    });
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    } else if (vote >= 5){
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener("submit", (parameter) => {
    parameter.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
    } else {
        window.location.reload();
    }
});
