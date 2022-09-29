import React from 'react'
import {useNavigate} from 'react-router-dom'
const Success = () => {
    let navigate=useNavigate();
  return (
    <center>
        <h1>Your order has been confirmed !</h1>
        <div className='orderPreviewDetails'>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        </div>
    </center>
  )
}

export default Success