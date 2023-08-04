/* MOVIE LIST TEST CASES */

/* Let's test each search call by the user */
describe(`Spy makeSearchCall as an API call`, ()  => {
    it('should call renderMovie', () => {
        // arrange
        let searchCallApi = {
            makeSearchCall: function(movie){
                return movie.title;
            }
        };
        //arr
        spyOn(searchCallApi, 'makeSearchCall');

        searchCallApi.makeSearchCall();
        // assert
        expect(searchCallApi.makeSearchCall).toHaveBeenCalled();
    });
});


/* Let's spy on selected movies that got displayed after the user keyed in
movie s/he wants to watch */
describe('A spy on Movie being searched by the user', () => {
        //arrange
        let movies 
        let name = null; //initialized to null prior to search
    
        beforeEach(() => {
            movies = {
                renderMovie: function(params){
                    name = params;
                }
            };
           // act
            spyOn(movies, 'renderMovie'); //spy on the function
            movies.renderMovie(
                "Devil's Pass", '100 min', 5.7, 
                'Horror Mystery Thriller', 'Produced in Uk'
            );
            movies.renderMovie(
                "Hall Pass", '105 min', 5.9,
                'Comedy, Romance', 'Produced in Uk');

            movies.renderMovie(
                "Breakheart Pass", '95 min', 6.7,
                'Horror Mystery Thriller', 'Produced in US');

            movies.renderMovie(
                "Psycho-Pass", '25 min', 
                'Animation, Action, Crime', 'Produced in USA');
            
        });
    
       
        it('track that movie spy was called', () => {
            //assert
            expect(movies.renderMovie).toHaveBeenCalled();
        })
    
        it('track the spy was called 4 times', () => {
            // assert
            expect(movies.renderMovie).toHaveBeenCalledTimes(4);
        })
    
        //assert
        it('tracks all the args of its calls', () => {
            expect(movies.renderMovie).toHaveBeenCalledWith(
                "Breakheart Pass", '95 min', 6.7,
                'Horror Mystery Thriller', 'Produced in US');
        })
    
        //assert
        it('stops all execution on a function', () => {
            expect(name).toBeNull();
        })
    
        // assert 
        it('tracks if it was called at all', () => {
            movies.renderMovie();
            expect(movies.renderMovie.calls.any()).toEqual(true);
        })
    
})

/* Add movie testcase */
describe("addMovie to your watchlist", function() {

    it("should call the add function with the correct arguments", function() {
        //arrange

        let movies = []; //new array to store selected movie by the user
        let addtoWatchlist = {
                movieList: function(params) {
            //push the value to the movie array been selected
                movies.push(params);
                }
            };
        	
        // act
        // call on spy to register movie we want to add 
        spyOn(addtoWatchlist, 'movieList').and.callThrough();
           
        addtoWatchlist.movieList(`Breakheart Pass", '95 min', ${6.7}, \
        'Horror Mystery Thriller', 'Produced in US`);
             // assert
        expect(addtoWatchlist.movieList).toHaveBeenCalled();
    });
  });
  


