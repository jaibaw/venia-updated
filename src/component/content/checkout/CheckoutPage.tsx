
import { useState } from "react";
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
                        <div className={!showpriceSummary ? "checkout__info__show" : "checkout__info__hide"}>
                            <div className='price__summary__container'>
                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--11">
                                        <div className="sign__in__label">
                                            <label>
                                                Sign in for Express Checkout
                                            </label>
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--11">
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
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;

