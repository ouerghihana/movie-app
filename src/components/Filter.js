import React from 'react'
import Rate from './Rate'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Filter({setsearch, setrate,rate}) {
 
  return (
    
    <div className='filterContainer'>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
    <Form.Control
      placeholder="Search movie"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setsearch(e.target.value)}/>
  </InputGroup>
  <Rate rate={rate} setrate={setrate}/>
    </div>
    
   
  )
}
