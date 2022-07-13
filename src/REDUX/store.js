
import { createStore } from "redux";
import { combineReducers } from "redux";
import  { mobilesReducer,tabletReducer} from './mobile/mobileReducer'

const rootReducer = combineReducers({
    mobile: mobilesReducer,
    tablet:tabletReducer
})
const store = createStore(rootReducer)
export default store