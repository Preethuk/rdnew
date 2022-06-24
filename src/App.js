
// import {cardimage} from "../src/image/cardimage.jpg"
import './App.css';
import{Button,Card} from 'react-bootstrap'

function App() {
  return (
    // // <div className="text-center text-danger">                                 
    // //   <h1>Hello World</h1>
    // </div>

    <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


    </div>
  );
}

export default App;
