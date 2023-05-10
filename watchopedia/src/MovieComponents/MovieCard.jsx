import React from 'react'

function MovieCard(props) {
  return (
    <div className='movieCard' >
        The name of the movie is : {props.name}
    </div>
  )
}

export default MovieCard
