import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ipad: 2,
    samTablet:2
}

const increment = (state) => {

    if (state.ipad > 0) state.ipad -= 1

}
const decrement = (state) => {
    if (state.samTablet > 0) state.samTablet -= 1
}

const tabletSlice = createSlice({
    name: 'tablet',
    initialState,
    reducers: {
        increment,
        decrement
    }
})

export const {
    increment: incrementActions,
    decrement: decrementActions
} = tabletSlice.actions

export default tabletSlice.reducer