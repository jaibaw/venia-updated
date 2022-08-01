import facebook1 from '../../assests/images/facebook1.svg';
import twitter1 from '../../assests/images/twitter1.svg';
import instagram1 from '../../assests/images/instagram1.svg';

// quntity selection
function OrderSuccess(props: any) {

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];


    const shippingMethod = window.localStorage.getItem('shippingMethodValue');

    const paymentInfo = window.localStorage.getItem('paymentInfo');
    let paymentInfoList = paymentInfo ? JSON.parse(paymentInfo) : {};

    const shippingInfo = window.localStorage.getItem('shippingInfo');
    let shippingInfoList = shippingInfo ? JSON.parse(shippingInfo) : {};


    //retun component
    return (
        <div className="order__success__container">
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--8   aem-GridColumn--phone--12 ">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                            <div className="order__number__div">
                                <label>
                                    Order Number #1700834
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div className="order__success__methods__div">
                                <label>
                                    Shipping Information
                                </label>
                            </div>
                            <div>
                                <label>
                                    {shippingInfoList.email}
                                </label>
                            </div>
                            <div>
                                <label>
                                    {shippingInfoList.phone}
                                </label>
                            </div><div>
                                <label>
                                    {shippingInfoList.firstName}{' '}
                                    {shippingInfoList.lastName}

                                </label>
                            </div><div>
                                <label>
                                    {shippingInfoList.city}{' '}
                                    {shippingInfoList.stateArea}{' '}
                                    {shippingInfoList.zip}
                                </label>
                            </div>
                            <div>
                                <label>
                                    {shippingInfoList.country}
                                </label>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label className="order__success__methods__div">
                                    Shipping Method
                                </label>
                            </div>
                            <div>
                                <label>
                                    {shippingMethod}
                                </label>
                            </div>
                            <div className='order__payment__label'>
                                <div className="order__success__methods__div">
                                    <label>
                                        Payment Information
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        {paymentInfoList.paymentType}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Visa ending with {paymentInfoList.cardNumber}
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className='order__product__summary__container'>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="payment__product__cart__count">
                                    <label>
                                        {uniqueCartItemList.length}items in your order
                                    </label>
                                </div>
                                {uniqueCartItemList && uniqueCartItemList.map(function (key: any) {
                                    return (
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                            <div className="aem-Grid aem-Grid--12">

                                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--5">
                                                    <div>
                                                        <img className="payment__product__cart__img" alt='product' src={key.image}>
                                                        </img>
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--6">
                                                    <div>
                                                        <div className="payent__product__label">
                                                            <label htmlFor='title'> {key.title}</label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor='size' >  Size : Medium</label>
                                                        </div>
                                                        <div >
                                                            <label htmlFor='color'> Color : Black</label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor='price'>${key.price}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div>
                            <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                                <div>
                                    <label>
                                        You will also receive an email with the details and we will let you know when your order has shipped.
                                    </label>
                                </div>
                                <div className="order__product__summary__discription__div">
                                    <label>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--12  aem-GridColumn--phone--hide">
                    <div className="discount__span__container">
                        <div className="discount__span__div ">
                            <label>
                                Give us a follow <br></br> to SAVE 20%  <br></br>on your next.
                            </label>
                        </div>
                        <div className='order__social__img__div'>
                            <img className='order__social__img' src={instagram1} alt="instagram">
                            </img>
                            <img className='order__social__img' src={facebook1} alt="facebook">
                            </img>
                            <img className='order__social__img' src={twitter1} alt="twitter">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;

