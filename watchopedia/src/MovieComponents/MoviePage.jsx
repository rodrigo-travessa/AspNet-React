import React, { useState } from 'react'
import MovieList from './MovieList'
import AddMovie from './AddMovie'

const MoviePage = () => {

  const [movieState, setMovieState] = useState(()=> {
    return { MovieList: ["Die Hard", "Harry Potter 1"]}
  })

  function handleAddMovie(newMovieName){
    setMovieState((prevState)=>{
      return ({...prevState, MovieList: prevState.MovieList.concat(newMovieName)})
    })
  }

  return (
    <div>
      <AddMovie addMovie={handleAddMovie} />
      <MovieList movieListing={movieState.MovieList} />
    </div>
  )
}

export default MoviePage
