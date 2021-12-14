import React from "react";
import PropTypes from 'prop-types';
import MoviesCard from "./MoviesCard";


function MoviesList({ moviedata }) {
    return (
        <div class="moviesList" style={{display:'flex', justifyContent:'spaceEvenly', flexWrap:'wrap'}}>
            {moviedata.map((el) => <MoviesCard el={el}>
            </MoviesCard>)}

        </div>
    )
}
MoviesList.propTypes = {
    moviedata: PropTypes.array,
}
export default MoviesList;