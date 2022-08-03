import { useState } from "react";
import edit1 from "../../../assests/images/edit1.svg";

//shipping method
function ShippingMethod() {
    //local state
    const [showShippingMethod, setShowShippingMethod] = useState(false);
    const [showShippingMethodEdit, setShowShippingMethodEdit] = useState(false);
    const [showShippingMethodLabel, setShowShippingMethodLabel] = useState(true);

    const [shippingDelivery, setShippingDelivery] = useState(true);
    const [expressDelivery, setExpressDelivery] = useState(false);
    const [nextDayDelivery, setNextDayDelivery] = useState(false);


    const [shippingMethodValue, setShippingMethodValue] = useState("Standard Shipping (4-8 business days via USPS) FREE");

    const shippingMethod = window.localStorage.getItem('shippingMethodValue');

    const handleContPayement = () => {
        window.localStorage.setItem('shippingMethodValue', shippingMethodValue);
        if (shippingMethodValue !== "") {
            setShowShippingMethod(false)
            setShowShippingMethodEdit(true)
            setShowShippingMethodLabel(false)
        }
    }

    const handleContPayementEdit = () => {
        setShowShippingMethodLabel(false)
        setShowShippingMethodEdit(false)
        setShowShippingMethod(true)
    }

    const handleShippingMethodLabel = () => {
        setShowShippingMethodLabel(false)
        setShowShippingMethod(true)
        setShowShippingMethodEdit(false)
    }

    const handleStandardShipping = (e: any) => {
        setExpressDelivery(false);
        setNextDayDelivery(false);
        setShippingDelivery(true);
        setShippingMethodValue(e.target.value)
    }

    const handleNextDayDelivery = (e: any) => {
        setExpressDelivery(false);
        setNextDayDelivery(true);
        setShippingDelivery(false);
        setShippingMethodValue(e.target.value)

    }

    const handleExpressDelivery = (e: any) => {
        setExpressDelivery(true);
        setNextDayDelivery(false);
        setShippingDelivery(false);
        setShippingMethodValue(e.target.value)
    }

    return (
        <div className="shipping__method__container">
            <div>
                <div onClick={handleShippingMethodLabel} className={showShippingMethodLabel ? "checkout__info__show " : "checkout__info__hide"}>
                    <div className='checkout__methods__div' >
                        <label >
                            2. Shipping Method
                        </label>
                    </div>
                </div>
            </div>
            <div className={showShippingMethod ? "checkout__info__show " : "checkout__info__hide"}>
                <div className='checkout__methods__div' >
                    <label >
                        2. Shipping Method
                    </label>
                </div>
                <div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--1 ">
                            <div>
                                <input
                                    id="shipping-method"
                                    type="radio"
                                    onClick={handleStandardShipping}
                                    name="shipping-method"
                                    checked={shippingDelivery}
                                    value="Standard Shipping (4-8 business days via USPS) FREE"
                                    className="form-check-input"
                                />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--11 ">
                            <div>
                                <label htmlFor="standard-shipping">
                                    <span className="delivery__method__span">
                                        Standard Shipping
                                    </span>
                                    <span>(4-8 business days via USPS) FREE
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--1 ">
                            <div>
                                <input
                                    type="radio"
                                    name="express-delivery"
                                    value="Express Delivery (2-5 business days via USPS) $17.95"
                                    checked={expressDelivery}
                                    onClick={handleExpressDelivery}
                                    className="form-check-input"
                                    id="express-delivery"
                                />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--11 ">
                            <div>
                                <label htmlFor="express-delivery">
                                    <span className="delivery__method__span"> Express Delivery</span>
                                    <span>(2-5 business days via USPS) $17.95
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--1 ">
                            <div>
                                <input
                                    type="radio"
                                    name="next-day-delivery"
                                    value="Next Day Delivery (Next business days via FedEx) $53.61"
                                    className="form-check-input"
                                    id="next-day-delivery"
                                    checked={nextDayDelivery}
                                    onClick={handleNextDayDelivery}
                                />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--11 ">
                            <div>
                                <label htmlFor="ted-lasso">
                                    <span className="delivery__method__span">Next Day Delivery </span>
                                    <span> (Next business days via FedEx) $53.61</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <div>
                            <button
                                id="cont-payment"
                                type="button"
                                className="checkout__step2__btn"
                                onClick={handleContPayement}
                            >
                                <span className="btn__span">
                                    CONTINUE TO PAYMENT
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>


            <div className={showShippingMethodEdit ? "checkout__info__show" : "checkout__info__hide"}>
                <div className="shipping__info__summary__container">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--10   aem-GridColumn--phone--10 ">
                            <div className="shipping__method__summary__div">
                                <label>Shipping Information</label>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--2 ">
                            <div onClick={handleContPayementEdit}>
                                <div className="shipping__method__summary__div">
                                    <div className="aem-Grid aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--4 ">
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
                                        {shippingMethodValue ? shippingMethodValue : shippingMethod}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}



export default ShippingMethod;