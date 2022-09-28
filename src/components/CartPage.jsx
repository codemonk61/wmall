import React,{useState} from "react";
import { useEffect } from "react";

function CartPage(){
     const [cartProduct,setCartProduct]=useState([])
    // let data=JSON.parse(localStorage.getItem('items'))
    // setCartProduct(data);
     useEffect(()=>{
        let data=JSON.parse(localStorage.getItem('items'))
        setCartProduct(data);
        console.log(cartProduct)
     },[])

    return(
        <>
        <h1>Cart Page</h1>
        {/* {cartProduct&&
           cartProduct.map((product)=>{
                return <li>{product.title}</li>
           })
        } */}
        </>
    );

}

export default  CartPage;