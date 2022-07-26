import { useSelector } from "react-redux";
import OrderSuccess from "../component/content/OrderSuccess";

// order
function Order(props: any) {
    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    //retun component
    return (
        <div className={setMenuBarStatus ? 'display-list' : ''}   >

            <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12 ">
                <div className='shopping-cart-title order__place__title'>
                    <span className='shopping-cart-title-span '>
                        Order Successful!
                    </span>
                </div>

                <div className='shopping__cart__border order__place__border__div '>
                    <div className='border order__place__border'>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                    <div className="order__container">
                        <OrderSuccess />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;

