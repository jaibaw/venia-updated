import api from "../api/api";
import { API_URL } from "../constant/api";


/* Function for getting list data */
export const get_all_products = () => {
    return api.get(`${API_URL.GET_ALL_PRODUCTS}`).then(
        (resp: any) => {
            return resp.data;
        },
        (err: any) => {
            return err;
        }
    );
};

/*  Function for to fetch the product based on category  */
export const get_productByCategory = (data: any) => {
    return api.get(`${API_URL.GET_PRODUCT_BY_CATEGORY}/${data}`, data).then(
        (resp: any) => {
            return resp.data;
        },
        (err: any) => {
            return err;
        }
    );
};

/*  Function for to fetch single product details  */
export const get_singleProductDetail = (data: any) => {
    return api.get(`${API_URL.GET_SINGLE_PRODUCT}/${data}`, data).then(
        (resp: any) => {
            return resp.data;
        },
        (err: any) => {
            return err;
        }
    );
};


/*  Function for to fetch single product details  */
export const get_sortProductPrice = (data: any) => {
    return api.get(`${API_URL.GET_PRODUCT_SORTING}?sort=${data}`, data).then(
        (resp: any) => {
            return resp.data;
        },
        (err: any) => {
            return err;
        }
    );
};