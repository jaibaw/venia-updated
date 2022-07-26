import { all, call, put, takeLatest } from "redux-saga/effects";
import { get_all_products, get_productByCategory, get_singleProductDetail, get_sortProductPrice } from "../effects/get-products";
import { ActionTypes } from "../constant/actions";

function* watchGetData() {
    // #region Section :- Document
    yield takeLatest(ActionTypes.GET_PRODUCTS.GET_PRODUCTS_FETCH_DATA, get_Products);
    yield takeLatest(ActionTypes.GET_PRODUCTS.GET_PRODUCT_BY_CATEGORY_DATA, get_Productt_By_Category);
    yield takeLatest(ActionTypes.GET_PRODUCTS.GET_SINGLE_PRODUCT_DATA, get_Single_ProductDetail);
    yield takeLatest(ActionTypes.GET_PRODUCTS.SORT_PRODUCT_PRICE, get_Sort_ProductPrice);
    // #endregion
}

// get all product list
function* get_Products(): any {
    try {
        const response = yield call(get_all_products)
        yield put({ type: ActionTypes.GET_PRODUCTS.GET_PRODUCTS_FETCH_DATA_SUCCESS, payload: response });
    } catch (err) {
        console.log(err);
    }
}

// to fetch the product based on category  
function* get_Productt_By_Category(action: any): any {
    try {
        const response = yield call(get_productByCategory, action.payload);
        if (response !== undefined) {
            yield put({
                type: ActionTypes.GET_PRODUCTS.GET_PRODUCT_BY_CATEGORY_DATA_SUCCESS,
                payload: response,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

// get the single product details
function* get_Single_ProductDetail(action: any): any {
    try {
        const response = yield call(get_singleProductDetail, action.payload);
        if (response !== undefined) {
            window.localStorage.setItem('data', JSON.stringify(response))
            yield put({
                type: ActionTypes.GET_PRODUCTS.GET_SINGLE_PRODUCT_DATA_SUCCESS,
                payload: response,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

// get the product list  based on price sorting
function* get_Sort_ProductPrice(action: any): any {
    try {
        const response = yield call(get_sortProductPrice, action.payload);
        if (response !== undefined) {
            yield put({
                type: ActionTypes.GET_PRODUCTS.SORT_PRODUCT_PRICE_SUCCESS,
                payload: response,
            });
        }
    } catch (err) {
        console.log(err);
    }
}


export default function* getProductList() {
    yield all([watchGetData()]);
}
