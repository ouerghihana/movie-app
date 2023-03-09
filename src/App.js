

import'./App.css';
import NavB from './components/NavB' ;
 import Filter from './components/Filter' ;
import AddMovie from './components/AddMovie' ;
import MovieList from './components/MovieList' ;
import {Movies} from'./components/Movies' ;
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Trailer from './components/Trailer';


function App() { 

const [listmovies,setlistmovies] = useState(Movies) ;
  console.log(listmovies);
  //adding movie
  const AddHandler=(newMovie)=> {setlistmovies
    ([...listmovies,newMovie])}
 //get the data from user
 const [search, setsearch] = useState("");
  //get the data from user(movie rate)
 const [rate, setrate] = useState(1);
  return ( 
   
    <div className="App">
     
       <NavB/> 
       <Routes>
       <Route path='/Filter' element ={ <Filter  setsearch={setsearch} setrate={setrate} rate={rate}/> }/>
       <Route path='/AddMovie' element ={<AddMovie AddHandler={AddHandler}/> } />
       
       <Route path='/' element ={<MovieList listmovies={listmovies} search={search}   rate={rate}     />} />
       <Route path='/movieTrailer/:id' element={<Trailer/>}   />
       </Routes>
       
    </div>
   
  );
}

export default App;
