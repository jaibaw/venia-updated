import { useDispatch, useSelector } from "react-redux";
import { IMG_CONST_VALUE } from '../../constant/common';
import Breadcrum from '../common/Breadcrum';
import Quantity from '../common/Quantity';
import share from "../../assests/images/share.svg";
import heart from "../../assests/images/heart.svg";
import { action_setCartQuantity } from "../../actions/get-products";
import { ROUTES } from "../../constant/routes";
import { Link } from "react-router-dom";
import StarRating from "../common/StarRating";
import chevrondown from "../../assests/images/chevrondown.svg";
import ImgSlider from "../common/ImgSlider";
import { useState } from "react";
import ReadMoreReact from 'read-more-react';

// single product display
function SingleProductDisplay() {
    // redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);
    const cartItemList = useSelector((state: any) => state.getProductList.cartItemList);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})
    const dispatch = useDispatch();

    const [thumbnailImg, setThumbnailImg] = useState("1");


    // maintain cart quantity
    const addTocart = () => {
        cartItemList.push(singleProductDetail);
        let uniqueCartItemList = [...new Set(cartItemList)];
        window.localStorage.setItem('cart', JSON.stringify(uniqueCartItemList))
        window.localStorage.setItem('cartValue', JSON.stringify(uniqueCartItemList.length))
        dispatch(action_setCartQuantity(uniqueCartItemList.length));
    }

    const handleThumbanailImg = (e: any) => {
        setThumbnailImg(e.target.id)

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
                                                    {
                                                        <img
                                                            id={key}
                                                            className={thumbnailImg === key ? 'side-product-display one__product__div' : 'side-product-display'}
                                                            alt='product'
                                                            onClick={handleThumbanailImg}
                                                            src={singleProductDetail.image}>
                                                        </img>
                                                    }
                                                </div>
                                            )
                                        })

                                    }
                                    <div>
                                        <div className="down__arrow">
                                            <img src={chevrondown} alt="arrow-down">
                                            </img>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--hide'>
                            <div className='product-display'>
                                {/* <img className="single-img-display" alt='product' src={singleProductDetail.image}>
                                </img> */}
                                <div  className="single-img-display" >
                                    <ImgSlider />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* {phone view} */}
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <div>
                        <Breadcrum />
                    </div>
                    <div className='aem-GridColumn  aem-GridColumn--phone--12'>
                        <div className="product-display-phone-view">
                            <div className='product-display'>
                                <ImgSlider />
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

                    <div className="star__rating__div">
                        <StarRating rating={singleProductDetail.rating.rate} />
                        <label htmlFor='rating' className="product-rating-span">
                            ({singleProductDetail.rating.count})
                        </label>
                    </div>
                    <div className="product-discription-details">
                        <div>
                            <ReadMoreReact
                                text={singleProductDetail.description}
                                min={80}
                                ideal={100}
                                max={120}
                                readMoreText="read more" />
                        </div>
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
                        <div>
                            <Link to={ROUTES.SHOPPING_CART}>{
                                <button type="button" className="add__to__cart__btn" onClick={addTocart}>
                                    ADD TO CART
                                </button>
                            }</Link>
                        </div>
                    </div>
                    <div className="share-save-div">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6">
                                <img className="save-share-logo" alt='save' src={heart}></img>
                                <label htmlFor='save' className="save-share-span">Save</label>
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6">
                                <img className="save-share-logo" alt='share' src={share}></img>
                                <label htmlFor='share' className="save-share-span">Share</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {phone view end} */}

            </div>


            <div className="aem-Grid aem-Grid--12">
                <div className="details-div">
                    <div className="product__title__span__display__div">
                        <label htmlFor='title'>
                            {singleProductDetail.title}
                        </label>
                    </div>
                    <div className="product__discription__span__div">
                        <label htmlFor='description'>
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
            <div className="border__div__product">
                <div className="border">
                </div>
            </div>
        </div>
    );
}

export default SingleProductDisplay;

