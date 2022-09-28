import React, { useState } from "react";
import '../App.css';
import {Link} from "react-router-dom"

function Card(props){
    const [products,setProducts]=useState([]);

    function addToCart(product){
   
        setProducts([...products,product]);

        localStorage.setItem('items',JSON.stringify(products))
       
    }

    return(
        
        <div className="wrapper">
            <Link to={`cart/${props.id}`}>
            <div className="image">
                <img src={props.productImage} alt={props.productTitle}/>
            </div>
            <div className="pname">
                <p>{props.productTitle}</p>
            </div>
            <div className="price">
                <p><span>Rs </span>{props.productPrice}</p>
            </div>
            </Link>
            <div className="btn">
                <button onClick={()=>addToCart({id:props.id,image:props.productImage,title:props.productTitle,price:props.productPrice})}>Add to Cart</button>
            </div>
        </div>

    );
}

export default Card;