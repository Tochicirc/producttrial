import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {remove} from "../Store/cartSlice";



const Cart = () => {

  const dispatch = useDispatch();

  const productCart = useSelector(state => state.cart);

  const removeToCart = (id) =>{
    dispatch(remove(id));
  }

  const cards = productCart.map(product =>(
    <div className="col-md-12" style={{marginBottom:'10px'}}>
    <Card style={{ width: '18rem'}} key={product.id} className="h-100">
      <div className="text-center mt-2">
        <Card.Img variant="top" src={product.image} 
        style={{width:'100px', height:'130px'}}/>
      </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{background: 'white'}}>
          <Button variant="danger" onClick={()=> removeToCart(product.id)} > Remove from cart</Button>
        </Card.Footer>
    </Card>
</div>
  ))

  return (
      <div className='row'>
        {cards}
      </div>
  )
}

export default Cart