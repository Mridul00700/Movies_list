import React, { useContext } from 'react';
import { MovieContext } from './context';

function Favourites() {

    const movies = useContext(MovieContext).favMovie;

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
