import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const AddMovie = (props) => {

  const [name, setName] = useState("");

  function submitAddMovieEvent(e, props){
    e.preventDefault();
    props.addMovie(name);
    setName('');

  }
  return (
    <div>
      <form onSubmit={(e)=> submitAddMovieEvent(e, props)} >
        <input type="text" 
        placeholder='movie name' 
        value={name} 
        onChange={(e)=> setName(e.target.value)} >

        </input>
        <button > Add Movie </button>
      </form>
    </div>
  )
}

export default AddMovie
