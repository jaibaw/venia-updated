import { ActionTypes } from "../constant/actions";

const initialState = {
    getProductList: [],
    singleProductDetail: {},
    setQuantity: '1',
    setCartQuantity: '',
    setMenuBarStatus: false,
    cartItemList: [],
    totolPrice: ''
};

export const getProductListReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        // get product list 
        case ActionTypes.GET_PRODUCTS.GET_PRODUCTS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                getProductList: action.payload
            };

        // get the product based on category
        case ActionTypes.GET_PRODUCTS.GET_PRODUCT_BY_CATEGORY_DATA_SUCCESS:
            return {
                ...state,
                getProductList: action.payload
            };

        // get the single product details
        case ActionTypes.GET_PRODUCTS.GET_SINGLE_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                singleProductDetail: action.payload
            };

        // get the product list  based on price sorting
        case ActionTypes.GET_PRODUCTS.SORT_PRODUCT_PRICE_SUCCESS:
            return {
                ...state,
                getProductList: action.payload
            };

        // set the product quanity based on increment and decerement
        case ActionTypes.GET_PRODUCTS.SET_PRODUCT_QUANTITY:
            return {
                ...state,
                setQuantity: action.payload
            };

        // get the cart quantity
        case ActionTypes.GET_PRODUCTS.SET_CART_QUANTITY:
            return {
                ...state,
                setCartQuantity: action.payload
            };

        // set menu bar status
        case ActionTypes.GET_PRODUCTS.SET_MENUBAR_STATUS:
            return {
                ...state,
                setMenuBarStatus: action.payload
            };

        // set PRICE VALUE
        case ActionTypes.GET_PRODUCTS.SET_TOTAL_PRICE_STATUS:
            return {
                ...state,
                totolPrice: action.payload
            };

        default:
            return state;
    }
};


