describe('Test delete a movie from watchlist', () => {
       let movieID
    it('should delete an item from a movieID', function() {
        //arr
        //set fake movieID constructor with id from omdapi db
        movieID = new Set([
            {id: 1},
            {id: 2},
            {id: 3}
        ]);

        //act
        //find the exact match of the movie to be deleted by the user
        const movie = [...movieID].find(movie => movie.id === 2);
        //delete the key via the id when the remove button is pressed.
        movieID.delete(movie);

        //assert
        expect([...movieID]).toEqual([{id: 1}, {id: 3}]);
    });
});

