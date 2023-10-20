
import axios from "axios";
import { UserActions } from "./user-redux";

export const loginUser=(phone,otp)=>{
    return async (dispatch)=>{
        const dial_code = '+91'
        const response = await axios.post('https://staging.fastor.in/v1/pwa/user/login',{phone,otp,dial_code},{headers:{'Content-Type':'application/json'}})
        console.log(response)
        console.log(response.data.data)
        dispatch(UserActions.login(response.data.data))
        return response
    }
}


