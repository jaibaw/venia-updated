import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddedCartProducts from '../component/content/AddedCartProducts';
import PriceSummary from '../component/content/PriceSummary';
import { ROUTES } from '../constant/routes';
import shoppingcart from '../assests/images/shoppingcart.gif'

//shopping cart
function ShoppingCart() {
    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    const total = window.localStorage.getItem('cartValue');
    const cartValue = total ? total : ' ';
    console.log("cartValue", cartValue)

    return (
        <div className={setMenuBarStatus ? 'display-list' : 'shopping-cart-container'}   >
            {/* <div className='shopping-cart-container'> */}
            <div className='shopping-cart-sub-container'>
                <div className="aem-Grid aem-Grid--12">
                    <div className='shopping-cart-title'>
                        <span className='shopping-cart-title-span'>
                            Your Shopping Bag
                        </span>
                    </div>
                    <div className='shopping__cart__border'>
                        <div className='border shipping__border'>
                        </div>
                    </div>

                    <div>
                        <div className={cartValue === ' ' ? "checkout__info__show" : "checkout__info__hide"}>
                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                <div className='shopping__0cart__item__div'>
                                    <div>
                                        <img alt="shopping-cart" className='shopping__cart__img' src={shoppingcart}></img>
                                    </div>
                                    <div>
                                        <h3>Hey, It feels so light. There is nothing in your bag.</h3>
                                    </div>
                                    <div>
                                        <h2> Pick up where you left off...!</h2>
                                    </div>

                                    <div>
                                        <Link to={ROUTES.HOME}>{
                                            <button id="shop-now" name="shop-now" type="button" className="shop__now__btn">
                                                SHOP NOW
                                            </button>
                                        }</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className={cartValue !== ' ' ? "checkout__info__show" : "checkout__info__hide"}>
                            <AddedCartProducts />
                        </div>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className={cartValue !== ' ' ? "checkout__info__show" : "checkout__info__hide"}>
                            <PriceSummary />
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default ShoppingCart;

