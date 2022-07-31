import { Link } from "react-router-dom";
import { ROUTES } from "../../../constant/routes";
import checksquare from "../../../assests/images/checksquare.svg";
import edit1 from "../../../assests/images/edit1.svg";
import helpcircle from "../../../assests/images/helpcircle.svg"
import { useState } from "react";

// quntity selection
function PaymentInformation(props: any) {

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];

    //local state
    const [showshippingInfo, setshowshippingInfo] = useState(false);
    const [showshippingInfoEdit, setshowshippingInfoEdit] = useState(false);
    const [showshippingInfoLabel, setshowshippingInfoLabel] = useState(true);
    const [checkedCreditCart, setCheckedCreditCart] = useState(true);
    const [checkedPaypal, setCheckedPaypal] = useState(true);

    const handleContReviewOrder = () => {
        setshowshippingInfo(false)
        setshowshippingInfoEdit(true)
        setshowshippingInfoLabel(false)
    }

    const handleContReviewOrderEdit = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfoEdit(false)
        setshowshippingInfo(true)
    }

    const handleShippingInfoLabel = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfo(true)
        setshowshippingInfoEdit(false)
    }


    const handleCreditCartClick = () => {
        setCheckedCreditCart(true);
        setCheckedPaypal(false);
    }

    const handlePaypal = () => {
        setCheckedCreditCart(false);
        setCheckedPaypal(true);
    }

    //retun component
    return (
        <div>
            <div>
                <div onClick={handleShippingInfoLabel} className={showshippingInfoLabel ? "checkout__info__show " : "checkout__info__hide"}>
                    <div className="payment__info__border">
                        <div className='checkout__methods__div' >
                            <label >
                                3. Payment Information
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={showshippingInfo ? "checkout__info__show " : "checkout__info__hide"}>
                <div className="aem-Grid aem-Grid--12">
                    <div className='checkout__methods__div' >
                        <label >
                            3. Payment Information
                        </label>
                    </div>
                </div>
                <div>
                    <div className="payment__opt__credit__card__div">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                                <div>
                                    <input
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        value="credit-card"
                                        onClick={handleCreditCartClick} />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--12 ">
                                <div>
                                    <label htmlFor="ted-lasso">
                                        Credit Card
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={checkedPaypal ? "checkout__info__hide" : "checkout__info__show"}>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--8   aem-GridColumn--phone--12 ">
                                <div className="label__name__div">
                                    <label>Name on Card
                                    </label>
                                </div>
                                <div className="input__box__div">
                                    <input className="input__box" type="text" name="name" />
                                </div>
                            </div>
                        </div>

                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--12 ">
                                <div className="label__name__div">
                                    <label>Credit Card Number
                                    </label>
                                </div>
                                <div className="input__box__div">
                                    <input className="input__box" type="text" name="name" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>Expiration Date
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="select" name="name" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>CVV
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                                    <div className="helpcircle__div">
                                        <img src={helpcircle} alt="help-circle">
                                        </img>
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8   aem-GridColumn--phone--12 ">
                                    <div className="input__box__div">
                                        <img className="check__square__img " src={checksquare}></img>

                                        <label>Billing address same as shipping address</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={checkedPaypal ? "" : "payment__option__div"}>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                                <div>
                                    <input
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        value="paypal"
                                        onClick={handlePaypal} />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--12 ">
                                <div>
                                    <label htmlFor="ted-lasso">
                                        PayPal
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <div>
                            <button type="button" className="checkout__step2__btn" onClick={handleContReviewOrder}>
                                <span className="btn__span">
                                    CONTINUE TO REVIEW ORDER
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className={showshippingInfoEdit ? "checkout__info__show" : "checkout__info__hide"}>
                    <div className="shipping__info__summary__container">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--10   aem-GridColumn--phone--10 ">
                                <div className="shipping__method__summary__div">
                                    <label>Payment Information</label>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--2">
                                <div onClick={handleContReviewOrderEdit}>
                                    <div className="shipping__method__summary__div">
                                        <div className="aem-Grid aem-Grid--12">
                                            <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--2 ">
                                                <div>
                                                    <img className="checkout__edit__icon" src={edit1} alt="edit">
                                                    </img>
                                                </div>
                                            </div>
                                            <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--2 ">
                                                <div className="checkout__edit__label">
                                                    <label>Edit</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                                <div className="shipping__method__summary__label__div">
                                    <div>
                                        <label>
                                            1
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            1
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payent__product__summary__container">
                        <div className="payent__product__sub__summary__container">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="payment__product__cart__count">
                                    <label>
                                        {uniqueCartItemList.length}{' '} items in your order
                                    </label>
                                </div>
                                {uniqueCartItemList && uniqueCartItemList.map(function (key: any) {
                                    return (
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                            <div className="aem-Grid aem-Grid--12">

                                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--5">
                                                    <div>
                                                        <img className="payment__product__cart__img" alt='product' src={key.image}>
                                                        </img>
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--6">
                                                    <div>
                                                        <div className="payent__product__label">
                                                            <label htmlFor='title'> {key.title}</label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor='size' >  Size : Medium</label>
                                                        </div>
                                                        <div >
                                                            <label htmlFor='color'> Color : Black</label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor='price'>${key.price}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="checkout__step4__btn_div">
                        <Link to={ROUTES.ORDER_PLACES}>{
                            <button type="submit" className="checkout__step4__btn">
                                <span className="btn__span">
                                    PLACE ORDER
                                </span>
                            </button>
                        }</Link>
                    </div>
                    <div className="payment__term__and__policy__label">
                        <label>By clicking confirm order you agree to our
                            <span className="payment__term__and__policy">Terms and Conditions</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PaymentInformation;

