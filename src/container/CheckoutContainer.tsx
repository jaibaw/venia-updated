import CheckoutPage from "../component/content/checkout/CheckoutPage";

// checkout
function CheckoutContainer(props: any) {
    //retun component
    return (
        <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12 ">
            <div className='shopping-cart-title'>
                <span className='shopping-cart-title-span checkout__title'>
                    Checkout
                </span>
            </div>
            <div className='shopping__cart__border checkout__border__div '>
                <div className='border checkout__border '>
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

