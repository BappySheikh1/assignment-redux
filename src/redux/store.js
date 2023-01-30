import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { productReducer } from './reducer/productReducer';
import thunk from "redux-thunk"


const store = createStore(productReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;