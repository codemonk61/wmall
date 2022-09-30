import React, { useState,useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom"

const Card=(props)=> {
    const [products, setProducts] = useState([]);

    function addToCart(product) {
        console.log('card',product)
        // setProducts(prevProduct=>[...products,product]);
        setProducts([...products,product]);

 }
 useEffect(()=>{

    localStorage.setItem('items',JSON.stringify(products))
 },[products])


    return (

        <div className="wrapper">
            <Link to={`cart/${props.id}`}>
                <div className="image">
                    <img src={props.productImage} alt={props.productTitle} />
                </div>
                <div className="pname">
                    <p>{props.productTitle}</p>
                </div>
                <div className="price">
                    <p><span>$ </span>{props.productPrice}</p>
                </div>
            </Link>
            <div className="btn">
                <button onClick={() => addToCart({ id: props.id, image: props.productImage, title: props.productTitle, price: props.productPrice })}>Add to Cart</button>
            </div>
        </div>

    );
}

export default Card;