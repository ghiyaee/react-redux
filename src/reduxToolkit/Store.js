import { configureStore } from "@reduxjs/toolkit";

import conterReducer from './ConterSlice'
import tabletReducer from './Tablet'
const store = configureStore({
    reducer: {
        conter: conterReducer,
        tablet:tabletReducer
    }
})

export default store