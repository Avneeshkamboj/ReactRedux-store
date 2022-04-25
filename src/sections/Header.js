import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, ListGroup } from "react-bootstrap";    
const Header = () => {

   const items = useSelector((state) => state.cart.cartitems);
    
    return(
      <>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
    <Nav className="me-auto">
    <ListGroup horizontal>
    <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
    <ListGroup.Item><Link to="/products">Products</Link></ListGroup.Item>
    <ListGroup.Item><Link to="/cart">Cart</Link></ListGroup.Item>
    <ListGroup.Item><span>Cart Items: {items.length}</span></ListGroup.Item>
     </ListGroup>
    </Nav>  
    </Container>
  </Navbar>  
        </>
    )
}
export default Header;