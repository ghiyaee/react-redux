import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appel: 5,
    samsung:5
}

const increment = (state) => {
    
      if (state.appel > 0) state.appel -= 1
     
}
const decrement = (state) => {
    if(state.samsung > 0) state.samsung -= 1
}

const conterSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers: {
        increment,
        decrement
    }
})

export const {increment:incrementAction,decrement:decrementAction}=conterSlice.actions

export default conterSlice.reducer