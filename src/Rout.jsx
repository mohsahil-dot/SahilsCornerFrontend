import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import Wishlist from './Wishlist.jsx';
import About from './About.jsx';
import PaymentSuccess from './PaymentSuccess.jsx';

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, wishList, setWishList, addtowish}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtowish={addtowish}/>} />
        <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtowish={addtowish}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}/>
        <Route path='/wishlist' element={<Wishlist wishList={wishList} setWishList={setWishList} />}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  );
};

export default Rout;