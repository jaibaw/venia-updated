import { useState } from "react";
import edit1 from "../../../assests/images/edit1.svg";

function ShippingMethod() {


    //local state
    const [showshippingInfo, setshowshippingInfo] = useState(false);
    const [showshippingInfoEdit, setshowshippingInfoEdit] = useState(false);
    const [showshippingInfoLabel, setshowshippingInfoLabel] = useState(true);


    const handleContPayement = () => {
        setshowshippingInfo(false)
        setshowshippingInfoEdit(true)
        setshowshippingInfoLabel(false)

    }

    const handleContPayementEdit = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfoEdit(false)
        setshowshippingInfo(true)

    }

    const handleShippingInfoLabel = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfo(true)
        setshowshippingInfoEdit(false)
    }



    return (
        <div className="shipping__method__container">
            <div>
                <div onClick={handleShippingInfoLabel} className={showshippingInfoLabel ? "checkout__info__show " : "checkout__info__hide"}>
                    <div className='checkout__methods__div' >
                        <label >
                            2. Shipping Method
                        </label>
                    </div>
                </div>
            </div>
            <div className={showshippingInfo ? "checkout__info__show " : "checkout__info__hide"}>
                <div className='checkout__methods__div' >
                    <label >
                        2. Shipping Method
                    </label>
                </div>
                <div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                            <div>
                                <input
                                    type="radio"
                                    name="favShow"
                                    value="Ted Lasso"
                                    checked={true}
                                    className="form-check-input"
                                    id="ted-lasso"
                                />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--12 ">
                            <div>
                                <label htmlFor="ted-lasso">
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
                        <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                            <div>
                                <input
                                    type="radio"
                                    name="favShow"
                                    value="Ted Lasso"
                                    checked={true}
                                    className="form-check-input"
                                    id="ted-lasso"
                                />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--12 ">
                            <div>
                                <label htmlFor="ted-lasso">
                                    <span className="delivery__method__span"> Express Delivery </span><span>(2-5 business days via USPS) $17.95
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                            <div>
                                <input
                                    type="radio"
                                    name="favShow"
                                    value="Ted Lasso"
                                    checked={true}
                                    className="form-check-input"
                                    id="ted-lasso"
                                />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--11   aem-GridColumn--phone--12 ">
                            <div>
                                <label htmlFor="ted-lasso">
                                    <span className="delivery__method__span">Next Day Delivery </span> <span> (Next business days via FedEx) $53.61</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <div>
                            <button type="button" className="checkout__step2__btn" onClick={handleContPayement}>
                                <span className="btn__span">
                                    CONTINUE TO PAYMENT
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>


            <div className={showshippingInfoEdit ? "checkout__info__show" : "checkout__info__hide"}>
                <div className="shipping__info__summary__container">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--10   aem-GridColumn--phone--10 ">
                            <div className="shipping__method__summary__div">
                                <label>Shipping Method</label>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--2 ">
                            <div onClick={handleContPayementEdit}>
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

            </div>

        </div>

    )
}



export default ShippingMethod;