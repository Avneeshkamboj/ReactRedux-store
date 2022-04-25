//import React, {useState, useEffect} from 'react'
import {Card, Row, Col }  from "react-bootstrap";
import { add } from './app/cartSlice';
import { useDispatch } from "react-redux"
import Productsdata from './ProductData';

function Products() {

    const dispatch = useDispatch();
    // console.log("data:",Productsdata)
    // Below is the FakeApi data 
//const [products, setProducts] = useState([]);
// useEffect(() => {
//     const fetchProducts = async () => {
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         console.log(data);
//         setProducts(data);
//     }
//     fetchProducts();
// },[])

const handleAdd = (product) =>{
 dispatch(add(product))
}

  return (
    <div>
        <Row xs={1} md={4} className="g-4">
            {
                Productsdata.map((product) =>(
                    <Col key={product.id}>
<Card>
    <Card.Img variant="top" src={product.imgdata} style={{height: '250px'}} />
    <Card.Body>
      <Card.Title>{product.rname}</Card.Title>
      {/* <Card.Text>
       {product.description}
      </Card.Text> */}
      <button className='btn btn-primary' onClick={() => handleAdd(product) }>add to cart</button>
    </Card.Body>    
    <Card.Footer>
      <small className="text-muted">Price: ${product.price}</small>
    </Card.Footer>
  </Card>
  </Col>
                ))
            }
  
  
  </Row>
    </div>
  )
}

export default Products