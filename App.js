import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';

function App() {
  const [products,setproducts]=useState([])
  useEffect(()=>{ 
    const res=axios.get("https://fakestoreapi.com/products").then(res=>setproducts(res.data))
    
   },[])
   console.log(products)
   const [search,setsearch]=useState("")
   const [rate,setrating]=useState(0)
  return (
    
    <div className="App" style={{display:'flex',gap:"10px",flexWrap:"wrap"}}>
      <Form.Control
          onChange={(e)=>setsearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
           <Form.Control
          onChange={(e)=>setrating(e.target.value)}
            type="number"
            placeholder="rating"
            className="me-2"
            
          />
      
     {products.filter(e=>e.title.includes(search)&&e.rating.rate>rate).map(e=> 
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={e.image} />
       <Card.Body>
         <Card.Title>{e.title}</Card.Title>
         <Card.Text>
          {e.description}
          <br></br>
         price: {e.price}$
         <br></br>
         rate:{e.rating.rate}
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>)}
    </div>
  );
}

export default App;
