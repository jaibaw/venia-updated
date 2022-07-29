import { Link } from "react-router-dom";
import { ROUTES } from "../../../constant/routes";
import checksquare from "../../../assests/images/checksquare.svg";

// quntity selection
function PaymentInformation(props: any) {

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];

    //retun component
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                    <div className="checkout__methods__div">
                        <label>
                            3. Payment Information
                        </label>
                    </div>
                    <div>
                        <label htmlFor="ted-lasso">
                            <input
                                type="radio"
                                name="favShow"
                                value="Ted Lasso"
                                checked={true}
                                id="ted-lasso"
                            />{' '}
                            Credit Card
                        </label>
                    </div>


                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--7   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Name on Card
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--7   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Credit Card Number
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="hh" />
                            </div>
                        </div>
                    </div>


                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Expiration Date
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="select" name="name" placeholder="kk" />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                            <div>
                                <label>CVV
                                </label>
                            </div>
                            <div>
                                <input className="input__box" type="text" name="name" placeholder="kk" />
                            </div>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Billing address same as shipping address</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-check">
                        <label htmlFor="got">
                            <input
                                type="radio"
                                name="favShow"
                                value="GOT"
                                className="form-check-input"
                                id="got"
                            />{' '}
                            PayPal
                        </label>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                            <div>
                                <button type="submit" className="checkout__step2__btn">
                                    CONTINUE TO REVIEW ORDER
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div>
                    <label>
                        {uniqueCartItemList.length}items in your order
                    </label>
                </div>
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
                <div>
                    <Link to={ROUTES.ORDER_PLACES}>{
                        <button type="submit" className="checkout__step4__btn">
                            PLACE ORDER
                        </button>
                    }</Link>

                </div>

                <div>
                    <img src={checksquare}></img>
                    <label>By clicking confirm order you agree to our Terms and Conditions</label>
                </div>
            </div>
        </div>
    );
}

export default PaymentInformation;

