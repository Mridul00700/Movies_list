import React, { createContext, useState } from 'react';

export const MovieContext = createContext();



export default props => {

    const [favMovie, setFavMovie] = useState([{ name: "Inception", rating :8.9, fav: false }, {name: "Interstellar", rating : 8.8, fav: false}]); 


    const setMovie = (movie) => {
        let h=[];
        let k=0;
        for (let i of favMovie){
            h[k++] = {...i}
            if (i.name === movie){
                h[k-1].fav= !h[k-1].fav
            }
        }
        setFavMovie(h);
    }

    return(
        <MovieContext.Provider value={{favMovie, setFavMovie: setMovie}}>
            {props.children}
        </MovieContext.Provider>
    );
}