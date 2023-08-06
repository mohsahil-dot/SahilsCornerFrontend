import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "./Cart.css";

const Cart = ({cart, setCart}) => {

  const checkoutHandler = async (price) => {
    const { data: {key} } = await axios.get(`https://sahilscornerbackend.onrender.com/api/getkey`)
    const { data:{order} } = await axios.post(`https://sahilscornerbackend.onrender.com/api/checkout`, {
      price
    })
    const options = {
      key,
      amount: order.amount,
      currency: "USD",
      name: "Sahil'sCorner",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/128953596?v=4",
      order_id: order.id,
      callback_url: `https://sahilscornerbackend.onrender.com/api/paymentverification`,
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#000"
      }
  };
  const razor = new window.Razorpay(options);
      razor.open();
  }

  const increaseQuantity = (product) =>
  {
    const exist = cart.find((x) =>
    {
      return x.id === product.id
    })
    setCart(cart.map((currentElement) =>
    {
      return currentElement.id === product.id ? {...exist, qty: exist.qty + 1} : currentElement
    }))
  }

  const decreaseQuantity = (product) => {
    const exist = cart.find((x) =>
    {
      return x.id === product.id
    })
    setCart(cart.map((currentElement) =>
    {
      return currentElement.id === product.id ? {...exist, qty: exist.qty - 1} : currentElement
    }))
  }

  const removeProduct = (product) => 
  {
    const exist = cart.find((x) =>
    {
      return x.id === product.id
    })
    if (exist.qty > 0) {
      setCart(cart.filter((x) =>
      {
        return x.id !== product.id
      }))
    }
  }

  const price = cart.reduce((price, item) => price + item.qty*item.Price, 0)

  return (
    <>
    <div className='cart-container'>
    {cart.length === 0 &&
    <div className='empty-cart'>
      <h2 className='empty'>Oops🙁, Your Cart is <span>Empty</span></h2>
      <Link to='/product' className='emptyCartBtn'>Shop Now</Link>
    </div>}
      <div className='content'>
        {
          cart.map((currentElement) => 
          {
            return(
              <div className='cart-items' key={currentElement.id}>
                <div className='image-box'>
                  <img src={currentElement.Img} alt={currentElement.Title}></img>
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h4>{currentElement.Cat}</h4>
                    <h3>{currentElement.Title}</h3>
                    <p>Price: ${currentElement.Price}/-</p>
                    <div className='qty'>
                    <button className='increaseQuantity' onClick={() => increaseQuantity(currentElement)}>+</button>
                    <input type='text' value={currentElement.qty}></input>
                    <button className='decreaseQuantity' onClick={() => decreaseQuantity(currentElement)}>-</button>
                    </div>
                    <h3 className='subtotal'>Sub-total: ${currentElement.Price * currentElement.qty}/-</h3>
                  </div>
                  <div className='close'>
                    <button onClick={() => removeProduct(currentElement)}><AiOutlineCloseCircle /></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        cart.length > 0 &&
        <>
          <h2 className='total-price'>Total: ${price}/-</h2>
          <button className='checkout' onClick={() => checkoutHandler(price)}>Checkout</button>
        </>
      }
    </div>
    </>
  )
}

export default Cart;

//24:29