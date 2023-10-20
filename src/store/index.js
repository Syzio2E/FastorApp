import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-redux";

const store = configureStore({
    reducer:{user:userSlice.reducer}
})

export default store