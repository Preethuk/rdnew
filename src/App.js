
// import {cardimage} from "../src/image/cardimage.jpg"
import './App.css';
// import{Button,Card} from 'react-bootstrap'
import React,{useState} from 'react'
import Propexample from './propexample';

function App() {
    const [details,setDetails] = useState({name: "preethu",
    email: "preethusiva24@gmail.com",
    password: "preethu123"})
  return (
    
    <div>                                 
      <Propexample value={details}/>
    </div>

  );
}

export default App;
