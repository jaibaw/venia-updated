import { useLocation } from "react-router-dom";

// quntity selection
function ShippingInformation(props: any) {

    const location = useLocation()
    console.log(location, "ll")
    //retun component
    return (
        <div className="shipping__info__container">
            <div className="aem-Grid aem-Grid--12">
                <div className="guest__checkout__div">
                    <label>
                        Guest Checkout
                    </label>
                </div>
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
                            <div>
                                <label>
                                    Email
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>
                                    Phone Number
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="kk" />
                            </div>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div className="checkout__methods__div ">
                                <label>1. Shipping Information</label>
                            </div>

                            <div>
                                <label>Country
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>First Name
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Last Name
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="kk" />
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Street Address
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Street Address2
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="kk" />
                            </div>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>City
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                            <div>
                                <label>State
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="select" name="name" placeholder="kk" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Zip
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="kk" />
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                            <div>
                                <button className="checkout__step1__btn">
                                    CONTINUE TO SHIPPING METHOD
                                </button>
                            </div>
                        </div>
                    </div>


                </form>

            </div>

        </div>
    );
}

export default ShippingInformation;

