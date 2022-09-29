import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import '../App.css';
const CheckoutPage = () => {
    const {id}=useParams();
   const [checkoutData,setCheckoutData]=useState({})
    async function fetchSingleProduct(){
        const res=await fetch(`https://fakestoreapi.com/products/${id}`);
        const data=await res.json();
        setCheckoutData(data)
    }
    useEffect(()=>{
        fetchSingleProduct();
    },[])
  return (
    <>
        <h1>Checkout Page</h1>
    <div className='checkout'>

        
        <div className='checkoutImage'>
            <img src={checkoutData.image} alt={checkoutData.title}/>
            <p>$ {checkoutData.price}</p>
        </div>
        <div className='checkoutForm'>
        <div className='name'>
                <label>Name</label>
            </div>
            <div className='input'>
                <input type="text" placeholder="Enter Name"/>
            </div>
            <div className='mobile'>
                <label>Mobile</label>
            </div>
            <div className='input'>
                <input type="number" placeholder="Enter Number"/>
            </div>
            <div className='address'>
                <label>Address</label>
            </div>
            <div className='textarea'>
                <textarea type="text" placeholder="Enter Address"/>
            </div>
            <div className='checkoutBtn'>
            <Link to={`orderpreview/${checkoutData.id}`}>
                  <button>Continue</button>
            </Link>
            
            </div>
            
        </div>
    </div>
    </>
  )
}

export default CheckoutPage