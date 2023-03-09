import React from 'react'
import  {Nav,Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom"

export  default   function NavB() {
  return (
   
    <Navbar bg="dark" variant="dark">
       
          <Navbar.Brand href="#home">
          <img  className ='logo-movies' src='https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg' alt='logo' />
             MOVIES
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Home </Link> </Nav.Link>
            <Nav.Link href="#features"><Link to='/AddMovie'>Add Movie </Link></Nav.Link>
            <Nav.Link href="#pricing"> Favourites</Nav.Link>
          </Nav>
      
      </Navbar>
    
  )
}


