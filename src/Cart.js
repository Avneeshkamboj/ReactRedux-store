import React, {useEffect} from 'react'
import { add, remove, removeOne, removeAll, getTotal } from './app/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import { Table }  from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartitems)
  const cartTotals = useSelector((state)=> state.cart.cartTotalAmt)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal());
  },[cartItems, dispatch])

  const handleRemove = (productID) =>{
    dispatch(remove(productID))
  }
  const handleAdd = (product) =>{
    dispatch(add(product))
   }
   const removeOneItem = (product) => {
      dispatch(removeOne(product))
   }
   const handleRemoveAll = () => {
     dispatch(removeAll())
   }

//console.log("cart items", cartItems.length);
if(cartItems.length ===  0){
  return <h2>There is no Items in Cart.</h2>
}
  return (
    <div>
      {/* <Row xs={1} md={12} className="g-4">
            {
                cartItems.map((product) =>(
                    <Col key={product.id}>
<Card>
    
    <Card.Body>
    <Card.Img variant="top" src={product.imgdata} style={{height: '50px', width:'50px'}} />
     <Card.Title>{product.rname}</Card.Title>
      <div className='qtyBtns' style={{backgroundColor:'#f1f1f1', width:'100px', padding:10, margin:'10px 0px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontSize:'22px', cursor:'pointer'}} onClick={() => removeOneItem(product)}>-</span>
        <span style={{fontSize:'24px'}}> {product.qnty}</span>
        <span style={{fontSize:'22px', cursor:'pointer'}} onClick={() => handleAdd(product) }>+</span>
      </div>
      <button className='btn btn-primary' onClick={()=> handleRemove(product.id)}>remove</button>
    </Card.Body>    
    <Card.Footer>
      <small className="text-muted">Price: ${product.price*product.qnty}</small>
      <div className="text-muted" style={{float:"right"}}>Qty: {product.qnty}</div>
    </Card.Footer>
  </Card>
  </Col>
                ))
            }
  
  
  </Row> */}
  <Table striped bordered hover size="sm">
 <>
  <thead>
    <tr>
      <th></th>
      <th>Product Name</th>
      <th>Quanitity</th>
      <th>Action</th>
      <th>Item Price</th>
      <th>Total Price</th>
    </tr>
  </thead>
  </>
  {
    
                cartItems?.map((product) =>(
                  
                  <>
  <tbody>
    <tr key={product.id}>
      <td><img variant="top" src={product.imgdata} style={{height: '80px', width:'80px'}} alt={product.rname} /></td>
      <td><h5>{product.rname}</h5></td>
      <td><div className='qtyBtns' style={{backgroundColor:'#f1f1f1', width:'100px', padding:10, margin:'10px 0px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontSize:'22px', cursor:'pointer'}} onClick={() => removeOneItem(product)}>-</span>
        <span style={{fontSize:'24px'}}> {product.qnty}</span>
        <span style={{fontSize:'22px', cursor:'pointer'}} onClick={() => handleAdd(product) }>+</span>
      </div>
      </td>
      <td><button className='btn btn-primary' onClick={()=> handleRemove(product.id)}>remove</button></td>
      <td>${product.price}</td>
      <td>${product.price*product.qnty}</td>
    </tr>
  </tbody>
 </>
   ))
  } 
  <tfoot>
   <tr><td>Sub Total: ${cartTotals}</td>
   <td><button className='btn btn-primary' onClick={()=> handleRemoveAll()}>remove all</button></td></tr>
 </tfoot>
</Table>
    </div>
  )
}

export default Cart