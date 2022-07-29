import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CONST_VALUE } from '../../constant/common';
import Loader from "../common/Loader";
import Breadcrum from '../common/Breadcrum';
import Quantity from '../common/Quantity';
import share from "../../assests/images/share.svg";
import heart from "../../assests/images/heart.svg";
import addtocart from "../../assests/images/addtocart.png";
import { action_setCartQuantity } from "../../actions/get-products";
import { ROUTES } from "../../constant/routes";
import { Link } from "react-router-dom";
import StarRating from "../common/StarRating";

// single product display
function SingleProductDisplay() {

    const [loader, setLoader] = useState(true);

    // redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);
    const cartItemList = useSelector((state: any) => state.getProductList.cartItemList);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})
    const dispatch = useDispatch();

    //redux state


    // maintain cart quantity
    const addTocart = () => {
        cartItemList.push(singleProductDetail);
        let uniqueCartItemList = [...new Set(cartItemList)];
        window.localStorage.setItem('cart', JSON.stringify(uniqueCartItemList))
        window.localStorage.setItem('cartValue', JSON.stringify(uniqueCartItemList.length))
        //temp : added hardcode data
        dispatch(action_setCartQuantity(uniqueCartItemList.length));
    }


    // return component
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <div className="aem-Grid aem-Grid--12">
                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide'>
                            {
                                <div>
                                    {
                                        IMG_CONST_VALUE.map((key) => {
                                            return (
                                                <div className='side-product-div'>
                                                    <img className='side-product-display' alt='product' src={singleProductDetail.image}>
                                                    </img>
                                                </div>
                                            )
                                        })

                                    }
                                </div>
                            }
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--hide'>
                            <div className='product-display'>
                                <img className="single-img-display" alt='product' src={singleProductDetail.image}>
                                </img>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <div>
                        <Breadcrum />
                    </div>
                    <div className='aem-GridColumn  aem-GridColumn--phone--12'>
                        <div className="product-display-phone-view">
                            <div className='product-display'>
                                <img className="single-img-display" alt='product' src={singleProductDetail.image}>
                                </img>
                            </div>
                        </div>
                    </div>

                    <div className="product-title">
                        <label htmlFor='title' className="product-title-span">
                            {singleProductDetail.title}
                        </label>
                    </div>
                    <div>
                        <label htmlFor='price' className="product-price-span">
                            ${singleProductDetail.price}
                        </label>
                    </div>

                    <div>
                        <StarRating rating={singleProductDetail.rating.rate} />
                        <label htmlFor='rating' className="product-rating-span">
                            ({singleProductDetail.rating.count})
                        </label>
                    </div>
                    <div className="product-discription-details">
                        <p >
                            {singleProductDetail.description}
                        </p>
                    </div>

                    <div className="product-attribute">
                        <div className="product-attribute">
                            <span className="product-attribute-span">Quantity</span>
                        </div>

                        <div className=" aem-GridColumn--phone--12">
                            <div className="quantity-div">
                                <Quantity
                                    quantityId={0}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={ROUTES.SHOPPING_CART}>{<img alt='addtocart' className="product-add-to-cart-logo" src={addtocart} onClick={addTocart} ></img>}</Link>
                        {/* <img className="product-add-to-cart-logo" alt='addtocart' src={addtocart} onClick={addTocart}></img> */}
                    </div>
                    <div className="share-save-div">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6">
                                <img className="save-share-logo" alt='save' src={heart}></img>
                                <label htmlFor='save' className="save-share-span">Save</label>
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6">
                                <img className="save-share-logo" alt='share' src={share}></img>
                                <label htmlFor='share' className="save-share-span">Share</label>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


            <div className="aem-Grid aem-Grid--12">
                <div className="details-div">
                    <div>
                        <label htmlFor='title' className='product-title-span-display'>
                            {singleProductDetail.title}
                        </label>
                    </div>
                    <div>
                        <label htmlFor='description' className='product-discription-span'>
                            Description
                        </label>
                    </div>
                    <div>
                        <p>
                            {singleProductDetail.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className='end-border'>

            </div>
        </div>
    );
}

export default SingleProductDisplay;

