import { useLocation } from "react-router-dom";
import PriceSummary from "../PriceSummary";
import PaymentInformation from "./PaymentInformation";
import ShippingInformation from "./ShippingInformation";
import ShippingMethod from "./ShippingMethod";

// quntity selection
function CheckoutPage(props: any) {
    //retun component
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--8   aem-GridColumn--phone--12 ">

                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <ShippingInformation />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <ShippingMethod />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                        <PaymentInformation />
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--12 ">
                    <PriceSummary />
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;

