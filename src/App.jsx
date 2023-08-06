import React, { useState } from 'react'
import Nav from './Nav';
import Rout from './Rout';
import Footer from './Footer'
import {BrowserRouter} from 'react-router-dom';
import ProductDetail from './ProductDetail';

function App() {
    //cart
    const [cart, setCart] = useState([])

    //wishlist
    const [wishList, setWishList] = useState([])

    //product detail
    const [close, setClose] = useState(false);
    const [detail, setDetail] = useState([]);

    //Filteration of Products
    const [product, setProduct] = useState(ProductDetail)
    const searchBtn = (product) => {
        const change = ProductDetail.filter((x) =>
        {
            return x.Cat === product
        })
        setProduct(change)
    }

    //product detail
    const view = (product) => 
    {
        setDetail([{...product}])
        setClose(true)
    }

    //cart
    const addtocart = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exist) {
            alert("This Product is already added to Cart")
        } else {
            setCart([...cart, {...product, qty:1}])
            alert("Product Added to Cart")
        }
    }

    //wishlist
    const addtowish = (product) =>
    {
        const exist = wishList.find((x) =>
        {
            return x.id === product.id
        })
        if (exist) {
            alert("Already in Your WishList")
        } else {
            setWishList([...wishList, {...product, qty: 1}])
            alert("Product Added in Your Wishlist")
        }
    }
    return(
        <>
            <BrowserRouter>
            <Nav searchBtn = {searchBtn}/>
            <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} wishList={wishList} setWishList={setWishList} addtowish={addtowish}/>
            <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;
