import React from 'react'
import {useParams} from 'react-router';
import {Movies} from  './Movies' ;
import './Trailer.css';
const Trailer = () => {
    const{id}= useParams()
    console.log('id de mon film', id)
    const foundMovie = Movies.find((el)=>el.id===Number(id))
    console.log('movie object selon id',foundMovie)
  return (
    
    <div className="containerTrailer">
    <div className="cardTrailer">
      <div className="card__image-container">
        <img className="card__image" src={foundMovie.PosterURL} alt="" />
      </div>
      <svg className="card__svg" viewBox="0 0 800 500">
        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth={3} fill="transparent" />
      </svg>
      <div className="card__content">
        <h1 className="card__title">{foundMovie.Title}</h1>

        <p>{foundMovie.Description}</p>

      </div>
    </div>
    <iframe className="Card__video" src={foundMovie.Yvideo}  title="YouTube video player"  width="560" height="315"></iframe>
  </div>
);
}

export default Trailer
