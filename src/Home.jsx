import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineShoppingCart, AiFillEye, AiOutlineHeart, AiOutlineCloseCircle} from 'react-icons/ai';
import HomeProduct from './HomeProduct';
import HomeCategory from './HomeCategory';
import "./Home.css";

const Home = ({detail, view, close, setClose, addtocart, addtowish}) => {
  const navigate = useNavigate();

  const goToProductPage = () => {
    navigate('/product');
  };
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
      <div className='top-banner'>
        <div className='container'>
            <div className='img-box'>
                <img src='../assets/background.jpeg' width='500px' alt='banner'></img>
            </div>
            <div className='detail'>
                <h2>New Apple's Collection at 28% off*</h2>
                <Link to="/product" className="link">Avail Now</Link>
            </div>
        </div>
      </div>
      <div className='product-type'>
        <div className='container'>
        {
            HomeCategory.map((currentElement) =>
            {
                return (
                    <div className='box' key={currentElement.id}>
                        <div className='image-box' onClick={goToProductPage}>
                            <img src={currentElement.Img} alt={currentElement.Title}></img>
                        </div>
                        <div className='detail'>
                            <p>{currentElement.Title}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
      <div className='product'>
        <h1>The latest. <span>Take a look at what’s new right now.</span></h1>
        <div className='container'>
        {
            HomeProduct.map((currentElement) =>
            {
                return (
                    <div className='box' key={currentElement.id}>
                        <div className='image-box'>
                            <img src={currentElement.Img} alt={currentElement.Title}></img>
                            <div className='icon'>
                                <ul>
                                    <li onClick={() => addtocart(currentElement)}><AiOutlineShoppingCart/></li>
                                    <li onClick={() => view (currentElement)}><AiFillEye/></li>
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
                )
            })
        }
        </div>
      </div>

      <div className='student-offer'>
        <h1>Special stores. <span>Get specially designed pricing.</span></h1>
        <div className='container'>
            <div className='box'>
                <p>EDUCATION (SOON)</p>
                <h2>We offer special pricing for Students and Educators.</h2>
                <img src="../assets/studentoffer-removebg-preview (1).png" alt='student discount'></img>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;