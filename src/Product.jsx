import React from 'react';
import ProductDetail from './ProductDetail';
import {AiOutlineShoppingCart, AiFillEye, AiOutlineHeart, AiOutlineCloseCircle} from 'react-icons/ai';
import "./Product.css";

const Product = ({product, setProduct, detail, view, close, setClose, addtocart, addtowish}) => {

  const filterProduct = (product) => {
    const update = ProductDetail.filter((x) => 
    {
      return x.Cat === product;
    })
    setProduct(update);
  }

  const allProduct = () => {
    setProduct(ProductDetail)
  }

  return (
    <>
    {
      close ?
      <div className='product-detail'>
        <div className='container'>
          <button onClick={() => setClose(false)} className='closeBtn'><AiOutlineCloseCircle/></button>
          {
            detail.map((currentElement) => 
            {
              return (
                <div className='product-box'>
                  <div className='image-box'>
                    <img src={currentElement.Img} alt={currentElement.Title}></img>
                  </div>
                  <div className='detail'>
                    <h4>{currentElement.Cat}</h4>
                    <h2>{currentElement.Title}</h2>
                    <p>{currentElement.Description}</p>
                    <h3>${currentElement.Price}/-</h3>
                    <button onClick={() => addtocart(currentElement)}>add to cart</button>
                  </div>
                </div>
              )
            })
          }
          <div className='product-box'></div>
        </div>
      </div> : null
    }
    <div className='products'>
      <h1>All models. <span>Take your pick.</span></h1>
      <p>Home | Products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h2>Categories</h2>
            <ul>
              <li onClick={() => allProduct ()}>All Products</li>
              <li onClick={() => filterProduct ("Mac")}>Mac</li>
              <li onClick={() => filterProduct ("iPhone")}>iPhone</li>
              <li onClick={() => filterProduct ("iPad")}>iPad</li>
              <li onClick={() => filterProduct ("Apple Watch")}>Apple Watch</li>
              <li onClick={() => filterProduct ("AirPods")}>AirPods</li>
              <li onClick={() => filterProduct ("AirTag")}>AirTag</li>
              <li onClick={() => filterProduct ("HomePod")}>HomePod</li>
              <li onClick={() => filterProduct ("Apple TV 4k")}>Apple TV 4K</li>
              <li onClick={() => filterProduct ("Accessories")}>Accessories</li>
            </ul>
          </div>
        </div>
        <div className='product-box'>
          <div className='container'>
            {
              product.map((currentElement) =>
              {
                return (
                  <>
                  <div className='box' key={currentElement.id}>
                        <div className='image-box'>
                            <img src={currentElement.Img} alt={currentElement.Title}></img>
                            <div className='icon'>
                                <ul>
                                    <li onClick={() => addtocart(currentElement)}><AiOutlineShoppingCart/></li>
                                    <li onClick={() => view(currentElement)}><AiFillEye/></li>
                                    <li onClick={() => addtowish(currentElement)}><AiOutlineHeart/></li>
                                </ul>
                            </div>
                        </div>
                        <div className='detail'>
                            <p>{currentElement.Cat}</p>
                            <h3>{currentElement.Title}</h3>
                            <h4>${currentElement.Price}</h4>
                        </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product;