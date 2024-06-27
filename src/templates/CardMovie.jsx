import React from "react";
import star from '../assets/star.png'
import popeye from '../assets/popeye.jpeg'
import '../css/CardMovie.css'

function CardMovie(props) {
    return (
        <div className='card-movie'>
            <img src={popeye} alt={props.title} className='img-movie'/>
            <div className='info-movie'>
                <div className='rating'>
                    <p>{props.rating}</p>
                    <img className='star-rating' src={star} alt='star' />
                </div>
                <h3>{props.title}</h3>
                <div className='button-watch-movie'>Watch movie</div>
            </div>
        </div>
    );
}

export default CardMovie;