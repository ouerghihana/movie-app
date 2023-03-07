import React from 'react'
import  {Nav,Navbar} from 'react-bootstrap';


export  default   function NavB() {
  return (
   
    <Navbar bg="dark" variant="dark">
       
          <Navbar.Brand href="#home">
          <img  className ='logo-movies' src='https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg' alt='logo' />
          Movies
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Series</Nav.Link>
            <Nav.Link href="#features">TV Shows</Nav.Link>
            <Nav.Link href="#pricing"> Favourites</Nav.Link>
          </Nav>
      
      </Navbar>
    
  )
}


