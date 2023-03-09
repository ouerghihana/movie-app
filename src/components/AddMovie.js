import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
export default function AddMovie({AddHandler}) { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const navigate =useNavigate()
//*state to get the input from the user*//
//*pour stocker  les var eli yda5alhom user
const[Title,setTitle] = useState("")
const[Description,setDescription] = useState("");
const[PosterURL,setPosterURL] = useState("");
const[Rate,setRate] = useState("");
//adding new movie// math.random(donne une valeur unique)
const addMovie=()=>{
  const newMovie={id:Math.random ,Title,Description,Rate,PosterURL}
  AddHandler(newMovie);
  handleClose();
   navigate('/')
}
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>Add new movie</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value) } value={Title} />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={Description}  />
        <Form.Label>Poster URL</Form.Label>
        <Form.Control type="text" placeholder="Poster URL" onChange={(e)=>setPosterURL(e.target.value)} value={PosterURL} />
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Rate movie" onChange={(e)=>setRate(e.target.value)} value={Rate} />
      </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
           Add film
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
   
    )
  }


