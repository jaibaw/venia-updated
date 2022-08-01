import OrderSuccess from "../component/content/OrderSuccess";

// order
function Order(props: any) {
    //retun component
    return (

        <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12 ">
            <div className='shopping-cart-title'>
                <span className='shopping-cart-title-span'>
                    Order Successful!
                </span>
            </div>

            <div className='shopping__cart__border'>
                <div className='border'>
                </div>
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

