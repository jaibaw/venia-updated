import { Link } from "react-router-dom";
import { ROUTES } from "../../../constant/routes";
import checksquare from "../../../assests/images/checksquare.svg";
import edit1 from "../../../assests/images/edit1.svg";
import helpcircle from "../../../assests/images/helpcircle.svg"
import { useState } from "react";

// payment 
function PaymentInformation(props: any) {

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];

    //local state
    const [showPaymentInfo, setShowPaymentInfo] = useState(false);
    const [showPaymentInfoEdit, setShowPaymentInfoEdit] = useState(false);
    const [showPaymentInfoLabel, setShowPaymentInfoLabel] = useState(true);
    const [checkedPaypal, setCheckedPaypal] = useState(true);

    const [checkedPaymentCard, setCheckedPaymentCard] = useState(false);
    const [checkedPaymentPaypal, setCheckedPaymentPaypal] = useState(false);

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [paymentType, setPaymentType] = useState("");

    const cardNumberRestore = window.localStorage.getItem('cardnumber');
    const cardNameRestore = window.localStorage.getItem('cardname');
    const cvvNumberRestore = window.localStorage.getItem('cvvnumber');
    const expirationDateRestore = window.localStorage.getItem('expirationdate');
    const paymentTypeRestore = window.localStorage.getItem('paymenttype');

    const handleContReviewOrder = () => {
        if ((cardName !== "" && cardNumber !== "" && cvvNumber !== "" && expirationDate !== "")
            || (paymentType === 'Paypal') || (cardNumberRestore !== "" && cardNameRestore !== "" &&
                cvvNumberRestore !== "" && expirationDateRestore !== "" && paymentTypeRestore !== "")) {
            setShowPaymentInfo(false)
            setShowPaymentInfoEdit(true)
            setShowPaymentInfoLabel(false)
        } else {
            alert("enter respective payment option")
        }
    }

    const handleContReviewOrderEdit = () => {
        setShowPaymentInfoLabel(false)
        setShowPaymentInfoEdit(false)
        setShowPaymentInfo(true)
    }

    const handlePaymentInfoLabel = () => {
        setShowPaymentInfoLabel(false)
        setShowPaymentInfo(true)
        setShowPaymentInfoEdit(false)
    }

    const handleCreditCartClick = (e: any) => {
        setPaymentType(e.target.value);
        window.localStorage.setItem('paymenttype', e.target.value);
        setCheckedPaypal(false);
        setCheckedPaymentCard(true);
        setCheckedPaymentPaypal(false);
    }

    const handlePaypal = (e: any) => {
        setPaymentType(e.target.value);
        window.localStorage.setItem('paymenttype', e.target.value);
        setCheckedPaypal(true);
        setCheckedPaymentCard(false);
        setCheckedPaymentPaypal(true);
    }

    const handleCardName = (e: any) => {
        window.localStorage.setItem('cardname', e.target.value);
        setCardName(e.target.value);
    }

    const handleCardNumber = (e: any) => {
        window.localStorage.setItem('cardnumber', e.target.value);
        setCardNumber(e.target.value)
    }

    const handleExpirationDate = (e: any) => {
        window.localStorage.setItem('expirationdate', e.target.value);
        setExpirationDate(e.target.value)
    }

    const handleCVVChange = (e: any) => {
        window.localStorage.setItem('cvvnumber', e.target.value);
        setCvvNumber(e.target.value)
    }

    //retun component
    return (
        <div>
            <div>
                <div onClick={handlePaymentInfoLabel} className={showPaymentInfoLabel ? "checkout__info__show " : "checkout__info__hide"}>
                    <div className="payment__info__border">
                        <div className='checkout__methods__div checkout__methods__accordian__label' >
                            <label >
                                3. Payment Information
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={showPaymentInfo ? "checkout__info__show " : "checkout__info__hide"}>
                <div className="aem-Grid aem-Grid--12">
                    <div className='checkout__methods__div' >
                        <label htmlFor="payment-info">
                            3. Payment Information
                        </label>
                    </div>
                </div>
                <form>
                    <div>
                        <div className="payment__opt__credit__card__div">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--1 ">
                                    <div>
                                        <input
                                            type="radio"
                                            id="credit-card"
                                            name="credit-card"
                                            value="Credit Card"
                                            onClick={handleCreditCartClick}
                                            checked={checkedPaymentCard}
                                        />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--11 ">
                                    <div>
                                        <label htmlFor="credit-card">
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
                                        <label htmlFor="name-on-card">Name on Card
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            className="input__box"
                                            type="text"
                                            name="name-on-card"
                                            id="name-on-card"
                                            value={cardName ? cardName : (cardNameRestore && cardNameRestore ? cardNameRestore : cardName)}
                                            onChange={handleCardName}

                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="card-number" >Credit Card Number
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            className="input__box"
                                            type="text"
                                            name="card-number"
                                            id="card-number"
                                            value={cardNumber ? cardNumber : (cardNumberRestore && cardNumberRestore ? cardNumberRestore : cardNumber)}
                                            onChange={handleCardNumber}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--8">
                                        <div className="label__name__div">
                                            <label htmlFor="expiration-date">Expiration Date
                                            </label>
                                        </div>
                                        <div className="input__box__div">
                                            <input
                                                required
                                                className="input__box input__box__payment"
                                                type="select"
                                                name="expiration-date"
                                                id="expiration-date"
                                                value={expirationDate ? expirationDate : (expirationDateRestore && expirationDateRestore ? expirationDateRestore : expirationDate)}
                                                onChange={handleExpirationDate}
                                            />
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--3">
                                        <div className="label__name__div">
                                            <label htmlFor="cvv">CVV
                                            </label>
                                        </div>
                                        <div className="input__box__div">
                                            <input
                                                required
                                                className="input__box input__box__payment"
                                                type="text"
                                                name="cvv"
                                                id="cvv"
                                                value={cvvNumber ? cvvNumber : (cvvNumberRestore && cvvNumberRestore ? cvvNumberRestore : cvvNumber)}
                                                onChange={handleCVVChange} />
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--1">
                                        <div className="helpcircle__div">
                                            <img src={helpcircle} alt="help-circle">
                                            </img>
                                        </div>
                                    </div>
                                </div>

                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--8   aem-GridColumn--phone--12 ">
                                        <div className="input__box__div">
                                            <img className="check__square__img " src={checksquare} alt="check-square"></img>
                                            <label>Billing address same as shipping address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={checkedPaypal ? "" : "payment__option__div"}>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--1">
                                    <div>
                                        <input
                                            type="radio"
                                            id="paypal"
                                            name="paypal"
                                            value="Paypal"
                                            onClick={handlePaypal}
                                            checked={checkedPaymentPaypal}
                                        />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--11">
                                    <div>
                                        <label htmlFor="paypal">
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
                                <button
                                    type='button'
                                    className="checkout__step2__btn"
                                    onClick={handleContReviewOrder}
                                >
                                    <span className="btn__span">
                                        CONTINUE TO REVIEW ORDER
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <div className={showPaymentInfoEdit ? "checkout__info__show" : "checkout__info__hide"}>
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
                                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide">
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
                                            {paymentType ? paymentType : (paymentTypeRestore && paymentTypeRestore ? paymentTypeRestore : paymentType)}
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Visa ending with {cardNumber ? cardNumber : (cardNumberRestore && cardNumberRestore ? cardNumberRestore : cardNumber)}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payent__product__summary__container">
                        <div className="payent__product__sub__summary__container">
                            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12">
                                <div className="payment__product__cart__count">
                                    <label>
                                        {uniqueCartItemList.length}{' '} items in your order
                                    </label>
                                </div>
                                {uniqueCartItemList && uniqueCartItemList.map(function (key: any) {
                                    return (
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                            <div className="order__img__bottom">
                                                <div className="aem-Grid aem-Grid--12">
                                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--3">
                                                        <div>
                                                            <img className="payment__product__cart__img" alt='product' src={key.image}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--6">
                                                        <div className="order__img__label">
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
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12  aem-GridColumn--phone--hide">
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
                                    <span className="payment__term__and__policy ">Terms and Conditions</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PaymentInformation;

