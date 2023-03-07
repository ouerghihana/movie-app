import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rate from './Rate';
export default function MovieCard({movie}) { 
  console.log(movie);

  return (
    <div className='cardContainer'>
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.PosterURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
        {movie.Description}
        </Card.Text>
        <Rate rate={movie.Rate }/>
        <Button variant="primary">Play</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
