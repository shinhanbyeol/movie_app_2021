import React from 'react';
import PropTypes from 'prop-types';

function Movie({id,year,title,summary,poster,genres}) {
    return <div className="movies_movie">
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3>{title}</h3>
                <ul className="genres">
                    {
                        genres.map((genre,index)=>(
                            <li key={index} className="genres_genre">{genre}</li>
                        ))
                    }
                </ul>
                <h5>{year}</h5>
                <p>{summary}</p>
            </div>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie