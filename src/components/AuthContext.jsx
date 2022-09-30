import { createContext,  useState } from "react"

export const UserContext=createContext();
const AuthContext=({children})=>{
  let initialValue={
    name:"eh",
    mobile:"",
    address:""
  }
  const [user,setUser]=useState(initialValue);
  console.log('user>>',user)
  return(
    <>
    <UserContext.Provider value={{setUser,user}}>
      {children}
    </UserContext.Provider>
    </>
  )
}

export default AuthContext