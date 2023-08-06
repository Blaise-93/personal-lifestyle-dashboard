
const fetchInputEl = document.querySelector('.search-input');
const contentInfoEl = document.querySelector(".image-content");
const movieDashboardEl = document.querySelector('.movie-dashboard');

document.querySelector(".search-btn").addEventListener("click", movieInput);

export function movieInput() {
    movieDashboardEl.innerHTML = '';
    getMovie(fetchInputEl.value);
}

export function getMovie(search) {
    fetch(`https://www.omdbapi.com/?apikey=e237076&s=${search}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    
    })
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong while fetching \
            the movie of choice. Kindly check your network!");
        }
        return res.json();
    })
    .then(data => {
        console.log(e.target)
        return makeSearchCall(data);

    })
    .catch( () => `
        <h1> class="error-message">This Movie is not Available from \
        our database </h1>
    `);
}

export async function makeSearchCall(data) {
    try {
      const imdbID = data.Search.map((e) => e.imdbID);
      imdbID.forEach(async (id) => {
        const res =
          await fetch(`https://www.omdbapi.com/?apikey=e237076&s&i=${id}
      `)
        const movieData = await res.json();
        renderMovie(movieData);
      })
    } catch (error) {
      contentInfoEl.style.display = "flex";
      contentInfoEl.innerHTML = `<h1 class="error-message"> \
       Unable to find what you're looking for.😔
             Perhaps, you didn't type the movie name correctly. 
             \n Please search again... </h1>`;
    };
  };

export function renderMovie(movie) {
    const {
        Title,
        Poster, 
        Runtime,
        Plot,
        Genre,
        imdbRating,
        imdbID} = movie

    contentInfoEl.style.display = 'none';
    movieDashboardEl.innerHTML += `<section class="movie-inner">
        <div class="movie-poster">
            <img class="poster-img" src=${Poster} alt=${Title} />
        </div>
        <div class="movie-info">
        <div class="movie-title">
          <h1 class="title">${Title}</h1>
          <img class="star-icon" src='./icons/star-icon.png' 
            alt=${Title}
          >
          <div>${imdbRating}</div>
        </div>
        <div class='movie-desc'>
            <p>${Runtime}</p> 
            <p>${Genre}</p>
            <div class="watchlist-container">
                <img data-imdb=${imdbID} class='add-icon' src='icons/add-icon.png' />
                <p class="watchlist">Add to Watchlist</p>
            </div>
            <div class="plot">${Plot}</div>
        </div>
    </section>
    `;
    document.querySelectorAll(".add-icon")
     .forEach(icon => icon.addEventListener("click", filterMovie))

    async function filterMovie(event) {
    const id = event.target.dataset.imdb;
    const response = await fetch(`https://www.omdbapi.com/?apikey=e237076&s&i=${id}`);
    const data = await response.json();
    
    // store the movie in the browser
    localStorage.setItem(id, JSON.stringify(data));
    document.querySelector('.added-text')
        .classList.add('visible');
        setTimeout(() => {
        document.querySelector('.added-text')
            .classList.remove("visible");
        }, 1900)
    } 
};
