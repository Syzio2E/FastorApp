import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        username:null,
        userId:null,
        recentlocation:null,
    },
    reducers:{
        login(state,action){
            state.userId = action.payload.user_id
            state.username = action.payload.user_name
            state.recentlocation = action.payload.last_known_location[0]
        },
        logout(state){
            state.username= null
            state.userId= null
            state.recentlocation = null
        }
    }
})


export const UserActions = userSlice.actions
export default userSlice