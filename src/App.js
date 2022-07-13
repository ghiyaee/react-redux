import { Provider } from "react-redux";
// import MobileShop from "./components/MobileShop";
import Conter from "./components/Conter";
// import  store  from "./REDUX/store";
import store from "../src/reduxToolkit/Store";
const App=()=> {
  return (
    <Provider store={store}>
    <div className="App"> 
        {/* <MobileShop/> */}
        <Conter/>
    </div>
    </Provider>
  );
}

export default App;
