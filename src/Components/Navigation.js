import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

function Navigation() {
  const cartProducts = useSelector(state => state.cart)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to='/' as = {Link}>Redux Toolkit</Navbar.Brand>
          <Nav>
            <Nav.Link  as={Link} to ='/'>Products</Nav.Link>
          </Nav> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link to="/cart" as = {Link}>My Cart {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;