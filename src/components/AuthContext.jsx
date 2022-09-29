import React, { Children } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const UserContext=createContext();
const AuthContext = ({children}) => {
    
    const [user,setUser]=useState();
    const userDetails=()=>{
        
    }
  return (
    <UserContext.Provider value={{user,userDetails}}>
        {Children}
    </UserContext.Provider>
  )
}

export default AuthContext