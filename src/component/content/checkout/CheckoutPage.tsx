
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constant/routes";
import PriceSummary from "../PriceSummary";
import PaymentInformation from "./PaymentInformation";
import ShippingInformation from "./ShippingInformation";
import ShippingMethod from "./ShippingMethod";

// checkout selection
function CheckoutPage() {

    const [showpriceSummary, setShowPriceSummary] = useState(false);

    const priceSummaryDiv = (data: any) => {
        setShowPriceSummary(data)
    }

    //retun component
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--8   aem-GridColumn--phone--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <ShippingInformation
                            priceSummaryDiv={priceSummaryDiv}
                        />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <ShippingMethod />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <PaymentInformation />
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--12 ">
                    <div>
                        <div className={!showpriceSummary ? "price__summary__div__info__show" : "price__summary__div__info__hide"}>
                            <div className='price__summary__container'>
                                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--hide">
                                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--hide">
                                        <div className="sign__in__label">
                                            <label>
                                                Sign in for Express Checkout
                                            </label>
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide">
                                        <div>
                                            <button
                                                type='button'
                                                className="sign__in__btn"
                                            >
                                                <span className="sign__in__btn__span">
                                                    SIGN IN
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={showpriceSummary ? "price__summary__div" : ""}>
                        <PriceSummary />
                    </div>
                    {/* Phone View */}
                    <div className='banner-phone'>
                        <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">
                            <div className='aem-GridColumn aem-GridColumn--phone--12'>
                                <div className="checkout__step4__btn_div">
                                    <Link to={ROUTES.ORDER_PLACES}>{
                                        <button type="submit" className="checkout__step4__btn">
                                            <span className="btn__span">
                                                PLACE ORDER
                                            </span>
                                        </button>
                                    }</Link>
                                </div>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--phone--12'>

                                <div className="payment__term__and__policy__label">
                                    <div>
                                        <label>By clicking confirm order you agree to our
                                        </label>
                                    </div>
                                    <div>
                                        <span className="payment__term__and__policy">Terms and Conditions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {phone view end} */}
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;

