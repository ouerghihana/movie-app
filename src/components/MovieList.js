import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList ({listmovies,search,rate}) {
  console.log('{listmovies}',{listmovies})
  return (
    <div className='MovieListContainer'>
    {listmovies.filter((el)=>el.Title.toLowerCase().includes(search.toLowerCase().trim())  ).map((el,key)=>  <MovieCard   movie={el}/> )
    }

   
    
    </div>
  );
}





