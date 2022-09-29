import React from "react";
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import '../App.css';

function Header() {
    return (
        <ul className="header">
            <li>
                <Link to="cart">
                <FaShoppingCart />
                
                    
                        
                
                    
                </Link>
            </li>
        </ul>
    )
}
export default Header;