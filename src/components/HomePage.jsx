import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import '../App.css';
import Preloader from "./Preloader";

function HomePage(){
    const [data,setData]=useState()
   


    

    async function fetchApi(){
        const res=await fetch('https://fakestoreapi.com/products');
        const data=await res.json();
        setData(data);
    }
    useEffect(()=>{
        fetchApi();
    },[])
    
        if(!data) 
         return <Preloader/>


    return(
        
        <div className="flex">
        {
           data && data.map((items)=>{

                return <Card productTitle={items.title} id={items.id} key={items.id} productImage={items.image} productPrice={items.price} productCategory={items.category}/>
    
           }) 
        }
        </div>
        
    );
}

export default HomePage;