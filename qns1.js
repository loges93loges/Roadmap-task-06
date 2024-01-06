//--- a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const myMovie = new Movie("FAST-X", "Universal", "PG-15")
console.log(myMovie.title)
console.log(myMovie.studio) 
console.log(myMovie.rating)

//---Output---//
//---FAST-X
//---Universal
//---PG-13  


//--- b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const myMovie1 = new Movie("Gran Turismo", "Sony pictures")
console.log(myMovie1.rating)

const myMovie2 = new Movie("Avatar", "Fox ", "PG-12")
console.log(myMovie2.rating)

//--- Output ---//
//---PG
//---PG-13


//--- c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG")
  }
}
const movie1 = new Movie("Thor", "Paramount", "PG")
const movie2 = new Movie("Dark Knight", "Warner Bros.", "PG-13")
const movie4 = new Movie("Iron man", "Paramount", "G")

const moviesArray = [movie1, movie2, movie4]

const pgMovies = Movie.getPG(moviesArray)
console.log(pgMovies)

//--- Output ---//
//---[ Movie { title: 'Thor', studio: 'Paramount', rating: 'PG' } ]---//


//--- d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale.title)
console.log(casinoRoyale.studio)
console.log(casinoRoyale.rating)

//--- Output ---//
//---Casino Royale---//
//---Eon Productions---//
//---PG-13---//
