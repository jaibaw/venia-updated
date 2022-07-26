import { useSelector } from 'react-redux';
import AddedCartProducts from '../component/content/AddedCartProducts';
import PriceSummary from '../component/content/PriceSummary';
import RecentlyViewCartProduct from '../component/content/RecentlyViewCartProduct';

//shopping cart
function ShoppingCart() {
    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    return (
        <div className={setMenuBarStatus ? 'display-list' : 'shopping-cart-container'}   >
            <div className='shopping-cart-sub-container'>
                <div className="aem-Grid aem-Grid--12">
                    <div className='shopping-cart-title'>
                        <span className='shopping-cart-title-span'>
                            Your Shopping Bag
                        </span>
                    </div>
                    <div className='shopping-cart-border'>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <AddedCartProducts />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <PriceSummary />
                    </div>
                </div>
            </div>
            <div className='aem-Grid aem-Grid--12'>
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--hide">
                    <div className='shopping-cart-title'>
                        <span className='shopping-cart-title-span'>
                            Recently Viewed
                        </span>
                    </div>
                    <RecentlyViewCartProduct />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;

