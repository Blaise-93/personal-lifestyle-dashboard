const contentInfoEl = document.querySelector(".image-content")
const movieDashboardEl = document.querySelector('.movie-dashboard')


getLocalStorageKeys()

function renderMovie(movie) {
    const {
        Title,
        Poster, 
        Runtime,
        Plot,
        Genre,
        imdbRating,
        imdbID} = movie
    console.log(movie)
    contentInfoEl.style.display = 'none';
    movieDashboardEl.innerHTML += `<div class="movie-inner">
        <div class="movie-poster">
            <img class="poster-img" src=${Poster} alt=${Title} />
        </div>
        <div class="movie-info">
        <div class="movie-title">
          <h1 class="title">${Title}</h1>
          <img class="star-icon" src='./icons/star-icon.png'>
          <div>${imdbRating}</div>
        </div>
        <div class='movie-desc'>
            <p>${Runtime}</p> 
            <p>${Genre}</p>
            <div class="watchlist-container">
                <img data-imdb=${imdbID} class='add-icon' src='icons/remove-icon.png' />
                <p class="watchlist">Remove</p>
            </div>
            <div class="plot">${Plot}</div>
        </div>
    </div>
    ` 
    document
    .querySelectorAll(".add-icon")
    .forEach((icon) => icon.addEventListener("click", removeMovie));
}

function removeMovie(event) {
    document.querySelector('.removed-text')
    .classList.add('visible');
    setTimeout(() => {
        document.querySelector('.removed-text')
        .classList.remove('visible');
    }, 2000)

    const movieID = event.target.dataset.imdb
    localStorage.removeItem(movieID);
    if(localStorage.length === 0) {
        contentInfoEl.style.display = 'flex';
        movieDashboardEl.innerHTML = '';
    } else getLocalStorageKeys();
}

function getLocalStorageKeys() {
    /** 
       *Callback function that retrieve individual local key of the movie from
       * local storage.
    **/
    movieDashboardEl.innerHTML = ''

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)
        renderMovie(JSON.parse(localStorage.getItem(key)))
    }
}