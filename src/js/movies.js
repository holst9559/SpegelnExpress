import  movies  from   '../data/movies.json' assert { type: 'json' };

console.log('movies2', movies) 

let moviesList = document.querySelector('.movies-now')
let futureMovies = document.querySelector('.movies-later ')


class Movies {
    constructor(title,description,country,languages,director, actors, posterUrl,imageUrl,videoUrl,genres,ageRestriction,releaseDate,screeningTimes,tags,rating){
        this.title = title;
        this.description = description;
        this.country=country;
        this.languages = languages;
        this.director = director;
        this.actors = actors;
        this.posterUrl = posterUrl;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.genres = genres;
        this.ageRestriction = ageRestriction;
        this.releaseDate = releaseDate;
        this.screeningTimes = screeningTimes;
        this.tags = tags;
        this.rating = rating;     

    }


     static displayMovies(){
        movies.movies.forEach(movie =>{
      if(new Date(movie.releaseDate ).getFullYear() === new Date().getFullYear()){
                  // get the heading
       let heading = document.querySelector('.heading-1')
         heading.innerText = 'På Bion Just Nu' 
         Movies.createMovie(movie)
         
                
            }else{
            let heading = document.querySelector('.heading-2')
            heading.innerText = 'kommer snårt'
            Movies.createMovie(movie)
               
            
            }
            
       
        })
         
    }

    static createMovie(movie){
        // create movie card
       let movieCard = document.createElement('div')
       movieCard.className = 'movies'
        // create image div
        let imgDiv = document.createElement('div')
        imgDiv.classList.add('img-div')
 
        // create image
        let image = document.createElement('img')
        image.src = movie.imageUrl
 
        imgDiv.appendChild(image)
 
        // create title
        let title = document.createElement('p')
        title.innerText = `${movie.title}`
        movieCard.appendChild(imgDiv)
        movieCard.appendChild(title)
        
         new Date(movie.releaseDate ).getFullYear() === new Date().getFullYear()?  moviesList.appendChild(movieCard):
         futureMovies.appendChild(movieCard)

    }

}



document.addEventListener('DOMContentLoaded', Movies.displayMovies)



//Hantera startsidans filmer

//klass som hanterar renderandet av alla filmer ("MovieList")

//klass som hanterar enskild film (typ "Movie")