/* Coulture TestCases -> Ist PAge */

/* Fake test suite for fetching unsplash data from  */

describe(`Spy fetchUnsplashApi as an API call`, ()  => {
    it('should call renderUnsplash data', () => {
        let setUnsplash = null //before the API call by the user
        // arrange
        let searchCallApi = {
            //data to be received from api call
            fetchUnsplashApi: function(data){
                setUnsplash =  data;
            }
        };
        //act
        spyOn(searchCallApi, 'fetchUnsplashApi');

        searchCallApi.fetchUnsplashApi();
        // assert
        expect(searchCallApi.fetchUnsplashApi).toHaveBeenCalled();
    });
});


/* Fake test suite for fetching bitcoin data from  */
describe(`Spy fetchBitcoinApi as an API call`, ()  => {
    it('should call renderBitcoin', () => {
        let setBitcoin = null
        // arrange
        let searchCallApi = {
            fetchBitcoinApi: function(data){
                setBitcoin =  data;
            }
        };
        //act
        spyOn(searchCallApi, 'fetchBitcoinApi');

        searchCallApi.fetchBitcoinApi();
        // assert
        expect(searchCallApi.fetchBitcoinApi).toHaveBeenCalled();
    });
});

/* Fake test suite for fetching quotes data from  */
describe(`Spy quotesApi  as an API call`, ()  => {
    it('should call renderQuotes', () => {
        let setQuotes = null
        // arrange
        let searchQuotesApi = {
            quotesApi : function(data){
                setQuotes =  data;
            }
        };
        //act
        spyOn(searchQuotesApi, 'quotesApi');

        searchQuotesApi.quotesApi ();
        // assert
        expect(searchQuotesApi.quotesApi ).toHaveBeenCalled();
    });
});


/* Fake test suite for fetching openweather data from:

    NB-> I didnt want to render the data yet considering the charges
    which I don't have for now, I am considering other less expensive
    or free weatherAPI to use. 
*/
describe(`Spy mapApiCall as an API call`, ()  => {
    it('should call renderMap', () => {
        let setMap = null
        // arrange
        let searchCallApi = {
            mapApiCall : function(data){
                setMap =  data;
            }
        };
        //act
        spyOn(searchCallApi, 'mapApiCall');

        searchCallApi.mapApiCall();
        // assert
        expect(searchCallApi.mapApiCall).toHaveBeenCalled();
    });
});






