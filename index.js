//import {.env}

    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls)
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(() => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
  )`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

    //dont forget favicon


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} alt="bitcoin logo" />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p><img id="green" src="icons/up-arrow.png" alt="good market behavior arrow">: $${data.market_data.high_24h.usd}</p>
            <p><i id="red" class="fa-sharp fa-solid fa-arrow-down fa-beat-fade"></i>: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} alt="weather icon "/>
                <p class="weather-temp">${Math.round(data.main.temp)}℃</p>
                <p class="weather-city">${data.name}</p>
                <p class="weather-info">${data.weather[0].description}</p> 
            `
        })
        .catch(err => console.error(err))
});


fetch(`https://type.fit/api/quotes`)
    .then(response => response.json())
    .then(data => {

        function renderTextHtml() {
          matchingArr()
        }
        renderTextHtml()  

        setInterval( renderTextHtml, 33200000 )

       function matchingArr(){
            let newArrTexts = []
            textsArr =  data.filter(texts => {
            newArrTexts.push( texts.text)
            let randomNum = Math.floor(Math.random() * newArrTexts.length)
            document.querySelector('.quotes').textContent =  `${newArrTexts[randomNum]}`
         
        })
       }
       
    
    })




    