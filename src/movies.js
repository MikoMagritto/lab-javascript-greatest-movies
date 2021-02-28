// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directors = movies.map(function (film) {
    return film.director
  })
    
  return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
  const moviesSS = movies.filter(function (films) {
    return films.director === "Steven Spielberg"
  })
  
  const dramaMoviesSS = moviesSS.filter (function (filmsDrama) {
    return filmsDrama.genre.indexOf("Drama") !== -1                
  })
  return dramaMoviesSS.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
  let sumRate = movies.reduce(function (sum, note) {
    return sum + note.rate;
}, 0);
  
  let averageRate = Math.round(parseFloat((sumRate/movies.length)*100))/100
    return averageRate;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


