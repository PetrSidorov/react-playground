import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
}

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(reducer, enhancer);
