import { useState } from "react";
import edit1 from "../../../assests/images/edit1.svg";

// quntity selection
function ShippingInformation(props: any) {


    //local state
    const [showshippingInfo, setshowshippingInfo] = useState(false);
    const [showshippingInfoEdit, setshowshippingInfoEdit] = useState(false);
    const [showshippingInfoLabel, setshowshippingInfoLabel] = useState(true);


    const handleContShippingMethod = () => {
        setshowshippingInfo(false)
        setshowshippingInfoEdit(true)
        setshowshippingInfoLabel(false)

    }

    const handleContShippingMethodEdit = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfoEdit(false)
        setshowshippingInfo(true)

    }

    const handleShippingInfoLabel = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfo(true)
        setshowshippingInfoEdit(false)
    }


    //retun component
    return (
        <div className="shipping__info__container">
            <div onClick={handleShippingInfoLabel} className={showshippingInfoLabel ? "checkout__info__show " : "checkout__info__hide"}>
                <div className='checkout__methods__div' >
                    <label >
                        1. Shipping Information
                    </label>
                </div>
            </div>

            <div className={showshippingInfoLabel ? "checkout__info__hide" : "checkout__info__show"}>
                <div className="guest__checkout__div">
                    <label>
                        Guest Checkout
                    </label>
                </div>
            </div>
            <div>
                <div className={showshippingInfo ? "checkout__info__show " : "checkout__info__hide"}>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                            <div className="contract__information__div">
                                <label>Contact information</label>
                            </div>
                            <div className="contract__information_sub_title">
                                <label>
                                    We’ll use these details to keep you informed on your delivery.
                                </label>
                            </div>
                        </div>
                        <form>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>
                                            Email
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" placeholder="abc@xyz.com" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className="">
                                        <input className="input__box" type="text" name="name" placeholder="(222) 222-2222" />
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="checkout__methods__div__toggel">
                                        <label>1. Shipping Information</label>
                                    </div>

                                    <div className="label__name__div">
                                        <label>Country
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <select className="input__box" name="name" />
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>First Name
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input autoComplete="off" className="input__box" type="text" name="name" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>Last Name
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" />
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>Street Address
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>Street Address2
                                        </label>
                                        <label>Optional
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" />
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>City
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" placeholder="Altadena" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>State
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <select className="input__box" name="name" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label>Zip
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input className="input__box" type="text" name="name" placeholder="91001" />
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                                    <div>
                                        <button type="button" className="checkout__step1__btn" onClick={handleContShippingMethod}>
                                            <span className="btn__span">
                                                CONTINUE TO SHIPPING METHOD
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


            <div className={showshippingInfoEdit ? "checkout__info__show" : "checkout__info__hide"}>
                <div className="shipping__info__summary__container">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--10   aem-GridColumn--phone--10 ">
                            <div className="shipping__method__summary__div">
                                <label>Shipping Information</label>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--2 ">
                            <div onClick={handleContShippingMethodEdit}>
                                <div className="shipping__method__summary__div">
                                    <div className="aem-Grid aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--2 ">
                                            <div >
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
                        <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
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
                        <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
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
    );
}

export default ShippingInformation;

