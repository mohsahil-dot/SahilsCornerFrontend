import React from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = ({wishList, setWishList}) => {
const removeProduct = (product) => 
{
  const exist = wishList.find((x) =>
  {
    return x.id === product.id
  })
  if (exist.qty > 0) {
    setWishList(wishList.filter((x) =>
    {
      return x.id !== product.id
    }))
  }
}
  return (
    <>
      <div className='list-container'>
    {wishList.length === 0 &&
    <div className='empty-list'>
      <h2 className='empty'>alas🥲, Your Wishlist is <span>Empty</span></h2>
      <Link to='/product' className='emptyListBtn'>Add Now</Link>
    </div>}
      <div className='content'>
        {
          wishList.map((currentElement) => 
          {
            return(
              <div className='list-items' key={currentElement.id}>
                    <div className='box' key={currentElement.id}>
                        <div className='image-box'>
                            <img src={currentElement.Img} alt={currentElement.Title}></img>
                        </div>
                        <div className='detail'>
                            <p>{currentElement.Cat}</p>
                            <h3>{currentElement.Title}</h3>
                            <h4>${currentElement.Price}</h4>
                        </div>
                        <div className='remove'>
                          <button onClick={() => removeProduct(currentElement)}>remove</button>
                        </div>
                    </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Wishlist