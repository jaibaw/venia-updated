import facebook1 from '../../assests/images/facebook1.svg';
import twitter1 from '../../assests/images/twitter1.svg';
import instagram1 from '../../assests/images/instagram1.svg';

// quntity selection
function OrderSuccess(props: any) {

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];

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
                                    1
                                </label>
                            </div>
                            <div>
                                <label>
                                    2
                                </label>
                            </div><div>
                                <label>
                                    3
                                </label>
                            </div><div>
                                <label>
                                    4
                                </label>
                            </div>
                            <div>
                                <label>
                                    5
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
                                    1
                                </label>
                            </div>
                            <div>
                                <label>
                                    2
                                </label>
                            </div><div>
                                <label>
                                    3
                                </label>
                            </div>
                            <div className="order__success__methods__div">
                                <label>
                                    Payment Information
                                </label>
                            </div>
                            <div>
                                <label>
                                    1
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="total__order__summary__container">
                            <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                                <div className="total__order__count__div">
                                    <label>
                                        {uniqueCartItemList.length}items in your order
                                    </label>
                                </div>
                                <div>
                                    <div>
                                        <div className="aem-Grid aem-Grid--12">
                                            {uniqueCartItemList && uniqueCartItemList.map(function (key: any) {
                                                return (
                                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                        <div className="aem-Grid aem-Grid--12">

                                                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--5">
                                                                <div className='added-cart-product'>
                                                                    <img className='added-cart-product-img' alt='product' src={key.image}>
                                                                    </img>
                                                                </div>
                                                            </div>
                                                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--6">
                                                                <div className='added-product-detail'>
                                                                    <div className='added-cart-label-div'>
                                                                        <label htmlFor='title' className='added-cart-item-span'> {key.title}</label>
                                                                    </div>
                                                                    <div className='added-cart-label-div'>
                                                                        <label htmlFor='size' className='added-cart-item-label-detail-span' >  Size : Medium</label>
                                                                    </div>
                                                                    <div className='added-cart-label-div' >
                                                                        <label htmlFor='color' className='added-cart-item-label-detail-span'> Color : Black</label>
                                                                    </div>
                                                                    <div className='added-cart-label-div'>
                                                                        <label htmlFor='price' className='added-cart-item-label-detail-span'>${key.price}</label>
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
                                Give us a follow to SAVE 20% on your next.
                            </label>
                        </div>
                        <div>
                            <img src={instagram1}>
                            </img>
                            <img src={facebook1}>
                            </img>
                            <img src={twitter1}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;

