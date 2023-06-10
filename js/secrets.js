
export default api_key = 'e237076'

async function fetchdata(search){
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${search}&country=us&show_type=movie&output_language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67f2eca099msh34e59bca41d0063p14710ejsn46f023d5c909',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.error(error);
    }
}

fetchdata("Avengers")//export default api_key = '5c03d237'

//www.omdbapi.com/?i=tt3896198&apikey=e237076

//const url = `https://streaming-availability.p.rapidapi.com/v2/${search}/title?title=batman&country=us&show_type=movie&output_language=en`



