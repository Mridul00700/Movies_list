import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import { MovieContext } from './context';


function Movies() {

    const movies = useContext(MovieContext).favMovie;

    const setGMovie = useContext(MovieContext).setFavMovie;

    const handleClick = (movie) => {
        setGMovie(movie);
    }

    return (
        <div className="movies">
            <ul className="ul-list">
                { movies.map( movie => (
                    <li className="movie-list">{movie.name} {movie.rating}
                    { !movie.fav ?
                        <button  className="btn-n" onClick={() =>handleClick(movie.name)}></button>
                        :
                        <button className="btn-y" onClick={() => handleClick(movie.name)}></button>
                    }
                    </li> 
                    
                ))}
            </ul>
        
        <Link to="/favourite" className="fav-link">See Favourites</Link>    
        </div>
    )
}

export default Movies;
