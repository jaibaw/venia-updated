import CheckoutPage from "../component/content/checkout/CheckoutPage";

// checkout
function CheckoutContainer(props: any) {
    //retun component
    return (
        <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12 ">
            <div className='shopping-cart-title'>
                <span className='shopping-cart-title-span'>
                    Checkout
                </span>
            </div>
            <div className='shopping__cart__border'>
                <div className='border'>
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                <div className="checkout__container">
                    <CheckoutPage />
                </div>
            </div>
        </div>
    );
}

export default CheckoutContainer;

