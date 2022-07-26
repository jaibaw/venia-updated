import { useDispatch, useSelector } from "react-redux";
import Breadcrum from '../common/Breadcrum';
import Color from '../common/Color';
import Quantity from '../common/Quantity';
import Size from '../common/Size';
import share from "../../assests/images/share.svg";
import heart from "../../assests/images/heart.svg";
import addtocart from "../../assests/images/addtocart.png";
import Breathable from '../../assests/images/Breathable.png';
import fabricdetails from '../../assests/images/fabricdetails.png';
import Lightweightfabric from '../../assests/images/Lightweightfabric.png';
import Sweatwicking from '../../assests/images/Sweatwicking.png';
import { action_setCartQuantity, action_setTotalPrice } from "../../actions/get-products";
import StarRating from "../common/StarRating";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

//single product details
function SingleProductDetails() {
    const dispatch = useDispatch();

    //redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);
    const cartItemList = useSelector((state: any) => state.getProductList.cartItemList);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})

    // maintain cart quantity
    const addTocart = () => {
        cartItemList.push(singleProductDetail);
        let uniqueCartItemList = [...new Set(cartItemList)];
        window.localStorage.setItem('cart', JSON.stringify(uniqueCartItemList))
        window.localStorage.setItem('cartValue', JSON.stringify(uniqueCartItemList.length))
        //temp : added hardcode data
        dispatch(action_setCartQuantity(uniqueCartItemList.length));
    }

    //return product
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
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
                        <span className="product-attribute-span">Color</span>
                    </div>
                    <Color />
                </div>
                <div className="product-attribute">
                    <div className="product-attribute">
                        <span className="product-attribute-span">Size</span>
                    </div>
                    <div className=" aem-GridColumn--phone--12">
                        <Size />
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

            <div className="product-display-desktop-view">
                <div className="fabric-detail-div">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="product-attribute">
                            <label htmlFor='details' className="product-attribute-span">Details</label>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                            <div>
                                <img className="fabric-details-logo" alt='sweatwicking' src={Sweatwicking}></img>
                                <label htmlFor='details'>
                                    Sweat-wicking
                                </label>
                            </div>
                            <div>
                                <img className="fabric-details-logo" alt='lightweightfabric' src={Lightweightfabric}></img>
                                <label htmlFor='details'>
                                    Lightweight fabric
                                </label>
                            </div>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                            <div>
                                <img className="fabric-details-logo" alt='breathable' src={Breathable}></img>
                                <label htmlFor='details'>
                                    Breathable
                                </label>
                            </div>
                            <div>
                                <img className="fabric-details-logo" alt='fabricdetails' src={fabricdetails}></img>
                                <label htmlFor='details'>
                                    69% nylon, 31% lycra
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductDetails;

