import React,{useState} from "react";
import '../App.css';
import  {useNavigate,Link} from "react-router-dom"

const getDataFromLS=()=>{
    let data=JSON.parse(localStorage.getItem('items'));
    if(data){
        return JSON.parse(localStorage.getItem('items'));
    }else{
        return [];
    }

}
const CartPage=()=>{
    const navigate=useNavigate()
    const [count,setCount]=useState(0)
    const [LSItems,setLSItems]=useState(getDataFromLS())
    console.log(LSItems)
    const deleteCartItem=(id)=>{
        let newLSItems=LSItems.filter((items,index)=>{
            return id===index
        })
        setLSItems(newLSItems)
    }
    const increment=(price)=>{
        setCount(prevPrice=>prevPrice+price)
    }
    const decrement=(price)=>{
        if(price!==0)
        setCount(prevPrice=>prevPrice-price)
    }
    return(
        <>
        <h1>Cart Page</h1>
        {
            LSItems.map((items)=>{
                return(
                    <center key={items.id}>
                    <div className="cartPage" >
                        <div className="cartImage">
                            <img src={items.image} alt={items.title}/>
                            <div className="quantity">
                                
                                <p onClick={()=>decrement(items.price)}>-</p>
                                <p onClick={()=>increment(items.price)}>+</p>
                            </div>
                        </div>
                        <div className="productDesc">
                            <p onClick={()=>deleteCartItem(items.id)} className="close">x</p>
                            <p className="title"> {items.title}</p>
                            <p>{items.price==0?items.price:count}</p>
                            <button onClick={()=>navigate('/')} className="btn">Go to Home</button>
                            <Link to={`checkout/${items.id}`}>
                                 <button className="btn">Checkout</button>
                            </Link>
                            
                            
                        </div>
                    </div>
                    </center>
                )
            })
        }
      
        </>
    );

}

export default  CartPage;