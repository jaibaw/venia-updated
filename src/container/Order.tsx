import OrderSuccess from "../component/content/OrderSuccess";

// quntity selection
function Order(props: any) {
    //retun component
    return (

        <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12 ">
            <div className='shopping-cart-title'>
                <span className='shopping-cart-title-span'>
                    Order Successful!
                </span>
            </div>
            <div className='shopping-cart-border'>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                <div className="order__container">
                    <OrderSuccess />
                </div>
            </div>
        </div>

    );
}

export default Order;

