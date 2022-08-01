import { useSelector } from "react-redux";
import paypal from "../../assests/images/paypal.png";
import lock from "../../assests/images/lock.svg";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

//price summary product
function PriceSummary(props: any) {
    const location = useLocation()

    //redux state
    const setQuantity = useSelector((state: any) => state.getProductList.setQuantity);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];


    useEffect(() => {
        price();
    });

    let totolPrice = 0;

    const price = () => {
        return uniqueCartItemList && uniqueCartItemList.map((key: any) => {
            return totolPrice = (key.price * (parseInt(setQuantity))) + totolPrice;
        })
    }
    console.log(price())

    const handleCheckOut = () => {
        window.localStorage.setItem('shippingInfo', JSON.stringify({}));
    }

    // return component
    return (
        <div className='price__summary__container'>
            <div className='price__summary__title__div '>
                <label htmlFor='price-summary'>Pricing Summary</label>
            </div>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--11">
                    <div>
                        <div className="price__summary__sub__title__div">
                            <label htmlFor='subtotal' >Subtotal</label>
                        </div>
                        <div className='price__summary__sub__title__div'>
                            <label htmlFor='coupon'>Coupon</label>
                        </div>
                        <div className='price__summary__sub__title__div'>
                            <label htmlFor='gift-card'>Gift Card</label>
                        </div>
                        <div className='price__summary__sub__title__div'>
                            <label htmlFor='tax'>Estimated tax</label>
                        </div>
                        <div className='price__summary__sub__title__div'>
                            <label htmlFor='shipping'>Estimated shipping</label>
                        </div>
                        <div className='price__summary__sub__title__div'>
                            <label htmlFor='total' className="estimated__total__span "> Estimated Total</label>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                    <div className='price__summary__sub__title__div'>
                        <label htmlFor='subtoatl-value'>${totolPrice.toFixed(2)}</label>
                    </div>
                    <div className='price__summary__sub__title__div'>
                        <label htmlFor='coupon-value'>-${35.43}</label>
                    </div>

                    <div className='price__summary__sub__title__div'>
                        <label htmlFor='gift-card-value'>-${50}</label>
                    </div>

                    <div className='price__summary__sub__title__div'>
                        <label htmlFor='tax-value'>${23.28}</label>
                    </div>

                    <div className='price__summary__sub__title__div'>
                        <label htmlFor='free'>FREE</label>
                    </div>
                    <div className='price__summary__sub__title__div'>
                        <label htmlFor='toatl-value' className="estimated__total__span ">${totolPrice.toFixed(2)}</label>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className={location.pathname === '/checkout' ? 'checkout__btn__display' : 'price__summary__imgs__container'}>
                    <div>
                        <Link to={ROUTES.CHECKOUT}>
                            <button type="button" className="checkout__btn">
                                {<img className="lock__img" src={lock} alt="lock" onClick={handleCheckOut} ></img>}
                                CHECKOUT
                            </button>
                        </Link>
                    </div>
                    <div>
                        <img className='price__summary__img__paypal' alt='payment' src={paypal}>
                        </img>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PriceSummary;

