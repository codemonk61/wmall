import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css';

import {useSelector} from 'react-redux'

const OrderPreview = () => {
    let selector=useSelector(state=>state)
    //console.log("selector",selector)


    const { id } = useParams();
    const [checkoutData, setCheckoutData] = useState({})
    async function fetchSingleProduct() {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setCheckoutData(data)
    }
    useEffect(() => {
        fetchSingleProduct();
    }, [])
     
    return (
        <>
            <h1>OrderPreview</h1>
            <div className='orderPreview'>
                <div className='orderPreviewImage'>
                    <img src={checkoutData.image} alt={checkoutData.title} />
                </div>
                <div className='orderPreviewDetails'>
                    <h1>{checkoutData.title}</h1>
                    <p>$ {checkoutData.price}</p>
                    <p>Name: {selector.state.name}</p>
                    <p>Mobile: {selector.state.mobile}</p>
                    <p>Address: {selector.state.address}</p>
                    <Link to="success">
                        <button>confirm</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OrderPreview