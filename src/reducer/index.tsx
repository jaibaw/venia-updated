import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { getProductListReducer } from "./get-products";

export default (history: any) =>
    combineReducers({
        router: connectRouter(history),
        getProductList: getProductListReducer,
        // rest of your reducers
    });
