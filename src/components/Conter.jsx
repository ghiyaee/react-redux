import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../reduxToolkit/ConterSlice";
import { incrementActions, decrementActions } from "../reduxToolkit/Tablet";
const Conter = () => {
  const appel = useSelector((state) => state.conter.appel);
  const sam = useSelector((state) => state.conter.samsung);
  const ipad = useSelector((state) => state.tablet.ipad);
  const samtab = useSelector((state) => state.tablet.samTablet);
  const dispatch = useDispatch();
  return (
    <>
      <h1>conter appel: {appel}</h1>
      <h1>conter samsung: {sam}</h1>
      <button onClick={() => dispatch(incrementAction())}>
        decrement appel
      </button>
      <button onClick={() => dispatch(decrementAction())}>
        decrement samsung
      </button>
      <h1>conter ipad: {ipad}</h1>
      <h1>conter samtablet: {samtab}</h1>
      <button onClick={() => dispatch(incrementActions())}>
        decrement ipad
      </button>
      <button onClick={() => dispatch(decrementActions())}>
        decrement samtablet
      </button>
    </>
  );
};

export default Conter;
