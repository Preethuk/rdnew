import React, { useState } from 'react'
import {Button,Card,} from 'react-bootstrap'
import img from '../src/image/cardimage.jpg'

function Propexample(props) {
    const [name,setName] = useState({name: "preethu",
    email: "preethusiva24@gmail.com",
    password: "preethu123"})
    
  return (
<div style={{justifyContent:'center', display:'flex'}}>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{props.value.name}</Card.Title>
    <Card.Text>{props.value.email}
    </Card.Text>
    <Button variant="primary">{props.value.password}</Button>
  </Card.Body>
</Card>
</div>
    
  )
}

export default Propexample