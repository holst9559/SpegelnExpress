import  movies  from   '../data/movies.json' assert { type: 'json' };

console.log('movies', movies) 

let moviesList = document.querySelector('.movies-now')
let futureMovies = document.querySelector('.movies-later ')
let heading = document.querySelector('.heading-1')

function displayMovies (){
   
    movies.movies.map(movie=>{
      
        for(let m of movie.screeningTimes){
           
            console.log('m',new Date(m))
            console.log('new date',  new Date().toISOString().split("T")[0])
            if(new Date(m).toISOString().split("T")[0] ===  new Date().toISOString().split("T")[0]){

                // get the heading
                let heading = document.querySelector('.heading-1')
                heading.innerText = 'På Bion Just Nu'   
                createMovieCard(movie)
               

            }
        }

                let heading = document.querySelector('.heading-2')
                heading.innerText = 'kommer snårt'
               
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
          let title = document.createElement('h1')
         title.innerText = `${movie.title}`
         movieCard.appendChild(imgDiv)
         movieCard.appendChild(title)
      

        futureMovies.appendChild(movieCard)
       
          
       
    })
}

function createMovieCard(movie){
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
       let title = document.createElement('h1')
       title.innerText = `${movie.title}`
       movieCard.appendChild(imgDiv)
       movieCard.appendChild(title)
       
      
       moviesList.appendChild(movieCard)
    

}

displayMovies()







//Hantera startsidans filmer

//klass som hanterar renderandet av alla filmer ("MovieList")

//klass som hanterar enskild film (typ "Movie")