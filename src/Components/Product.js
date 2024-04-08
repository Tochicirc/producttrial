import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector} from "react-redux";
import {add} from "../Store/cartSlice";
import { getProducts } from "../Store/productSlice";

const Product  = () => {

  const dispatch = useDispatch();
  const {data: products} = useSelector(state => state.products)



  useEffect(() => {
    dispatch(getProducts())
  }, []);

  const addToCart = (product) =>{
    dispatch (add(product))
  }

  const cards = products.map(product=>(
    <div className="col-md-3" style={{marginBottom:'10px'}}>
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
            <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
          </Card.Footer>
      </Card>
    </div>
  ))


  return (
    <>
    {/* <h1> products</h1> */}
    <div className="row">
      {cards}
    </div>
    </>
  )
}

export default Product 