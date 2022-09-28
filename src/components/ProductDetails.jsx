import React from "react";
import '../App.css';
import { useEffect,useState } from "react";
import {useParams,useNavigate} from "react-router-dom"
function ProductDetails(){
    const navigate=useNavigate()
    const {id}=useParams();
    console.log(id)
    const [singlePrduct,setSingleProduct]=useState({})
    async function fetchSingleProduct(){
        const res=await fetch(`https://fakestoreapi.com/products/${id}`);
        const data=await res.json();
        console.log(data)
        setSingleProduct(data)
    }
    useEffect(()=>{
        fetchSingleProduct();
    },[])
    return(
        <center>
        <div className="product">
            <div className="productImage">
                <img src={singlePrduct.image} alt={singlePrduct.title}/>
            </div>
            <div className="productDetails">
                <p className="title">{singlePrduct.title}</p>
                <p>rating 3.9</p>
                <p>$ {singlePrduct.price}</p>
                <div className="btn">
                    <button onClick={()=>navigate("/")}>Go to Home</button>
                </div>
            </div>
        </div>
        </center>
    )
}

export default ProductDetails;