import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
  return (
    <>
        <div className='cart-container'>
            <div className='empty-cart'>
                <h2 className='empty'>Payment Successful 🫶🏻 <span>Ref No: {referenceNum}</span></h2>
                <Link to='/product' className='emptyCartBtn'>Shop More</Link>
            </div>
        </div>
    </>
  )
}

export default PaymentSuccess;