import {createStore} from "redux";
export const actionCreator=(user)=>{
    return {
        type:"VALUE",
        payload:user
    }
}

let initialValue={
    
}

export const reducer=(state=initialValue,action)=>{
    if(action.type==="VALUE")
    {
        return({...state,state:action.payload});
    }
    return state;
}

export const store=createStore(reducer)
