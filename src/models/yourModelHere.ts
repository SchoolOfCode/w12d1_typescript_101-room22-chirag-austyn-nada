import movies from "../db/yourDbPoolHere"
// getMovieByID should return the particular movies we are looking for
// createMovie should add a movie to the collection and return the new movie
// updateMoviesByID should replace the movie at a certain ID with an 
// deleteMoviesByID should remove the specific movies from the collection,
// GET ALL movies
// getMovies should return an array of all movies

export function getMovies() {
  return movies;
}
// GET A Movie BY ID
export function getMovieByID(id :number ) {
  console.log("id:" + id);
  const movieById = movies.find((movie) => {
    console.log(movie);
    return movie.id == id;
  });
  console.log("movie found: ");
  console.log(movieById);
  if (movieById) {
    return movieById;
  }
}

type movie = {
  id: number;
  title: string;
  author: string;
  URL: string;
}


// CREATE A movie
export  function createMovie(movie : movie) {
  movies.push(movie);
  return movies[movies.length - 1];
}
// UPDATE A Movie BY ID
export  function updateMovieByID(id: number, updates: movie) {
  //take in the id, take in an updated movie
  //find the movie with the id matching what we were given.
  //replace that movie with the updates
  //return new movie
  const foundIndex = movies.findIndex(function (movie) {
    return movie.id === id;
  });
  movies[foundIndex] = updates;
  return movies[foundIndex];
}
// DELETE A movie BY ID
export  function deleteMovieByID(id: number) {
  //take an item with that id
  //find that item from the array
  const foundIndex = movies.findIndex(function (movie) {
    return movie.id === id;
  });
  const item = movies[foundIndex];
  //remove it from array
  //return that removed item
  movies.splice(foundIndex, 1);
  return item;
}