
/** Function that retrieve unsplash data via api call.  */
export const fetchUnsplashApi = async () => {
    try {
        const res = await axios.get("https://apis.scrimba.com/unsplash/photos/random?\
        orientation=landscape&query=nature")
        const data = await res.data
             //console.log(data.urls)
             document.body.style.backgroundImage = `url(${data.urls.regular})`;
             document.getElementById("author").textContent = `By: ${data.user.name}`;
         
    } catch (error) {
        document.body.style.backgroundImage = `
        url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=\
        tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMT\
        c&ixlib=rb-1.2.1&q=80&w=1080
    )`;
         document.getElementById("author").textContent = `By: Dodi Achmad`
    
    }
}

fetchUnsplashApi()

export const fetchBitcoinApi = async () => {
    try {
        const res = await axios
                .get("https://api.coingecko.com/api/v3/coins/bitcoin")
        const data = await res.data
                document.getElementById("crypto-top").innerHTML = `
                    <img src=${data.image.small} alt="bitcoin logo" />
                    <span>${data.name}</span>
                `;
                document.getElementById("crypto").innerHTML += `
                    <p>🎯:
                        $${data.market_data.current_price.usd}
                    </p>
                    <p>
                        <img id="green" src="icons/up-arrow.png" 
                            alt="good market behavior arrow"
                        >:
                        $${data.market_data.high_24h.usd}
                    </p>
                    <p><i id="red" class="fa-sharp fa-solid 
                        fa-arrow-down fa-beat-fade"></i>:
                        $${data.market_data.low_24h.usd}
                    </p>
                `

    } catch (error) {
        console.log(error)
     }
}

fetchBitcoinApi()

export const getCurrentTime = () => {
    const date = new Date();
    document.getElementById("time").textContent = date
        .toLocaleTimeString("en-us", {timeStyle: "short"});
};

setInterval(getCurrentTime, 1000);

export const mapApiCall = async () => {
    navigator.geolocation.getCurrentPosition(async position => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?\
                lat=${position.coords.latitude}&lon=${position.coords.longitude}\
                &units=metric&appid=${api_key}`)   
                if (!res.ok) {
                    throw Error("Weather data not available");
                }
                const data = await res.data
                document.getElementById("weather").innerHTML = `
                        
                <p class="weather-temp">${Math.round(data.main.temp)}℃</p>
                <p class="weather-city">${data.name}</p>
                <p class="weather-info">${data.weather[0].description}</p> 
            `;
        } catch (error) {
                console.error(err)
            }
    })
}

mapApiCall()

/** A function that fetch besutiful quotes from fitapi   */
export const quotesApi = async () => (
        
    fetch(`https://type.fit/api/quotes`)
        .then(response => response.json())
        .then(data => {

        const matchingArr = () => {
                let newArrTexts = [];
                data.filter(texts => {
                newArrTexts.push( texts.text);
                let randomNum = Math.floor(Math.random() * newArrTexts.length);
                document.querySelector('.quotes')
                    .innerHTML =  `<p class="quote">${newArrTexts[randomNum]}</p>`;
            })
        }
        function renderQuoteHtml() {
            matchingArr();
        }
        renderQuoteHtml();
        
        setInterval( renderQuoteHtml, 21600000);
    })
    )
    
quotesApi()
    


