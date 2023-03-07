

import'./App.css';
import NavB from './components/NavB' ;
 import Filter from './components/Filter' ;
import AddMovie from './components/AddMovie' ;
import MovieList from './components/MovieList' ;
import {Movies} from'./components/Movies' ;
import {useState} from "react";

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
       <Filter  setsearch={setsearch} setrate={setrate} rate={rate}/>
       <AddMovie AddHandler={AddHandler}/>
       
       <MovieList listmovies={listmovies} search={search}   rate={rate}     />
       
      
       
    </div>
  );
}

export default App;
