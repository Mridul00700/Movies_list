import React, { useContext } from 'react';
import { MovieContext } from './context';

function Favourites() {

    const movies = useContext(MovieContext).favMovie;

    let f =0;
    let t = movies.map(movie => (
        movie.fav? f++ : null
     ))
     if (f===0){
         return <h1>No Favourites Yet!!</h1>
     }


    return (
        <div> 
            <ul className="ul-list-fav">
                {movies.map(movie => (
                   movie.fav? <li className="movie-list-fav">{movie.name} {movie.rating}</li> : null
                ))}
            </ul>
        </div>
    )
}

export default Favourites;
