import { useSelector } from "react-redux";
import paypal from "../../assests/images/paypal.png";
import checkout from "../../assests/images/checkout.png";
import { useEffect } from "react";

//price summary product
function PriceSummary(props: any) {
    //redux state
    const setQuantity = useSelector((state: any) => state.getProductList.setQuantity);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];


    useEffect(() => {
        price();
    });

    let totolPrice = 0;

    const price = () => {
        return uniqueCartItemList && uniqueCartItemList.map((key: any) => {
            return totolPrice = (key.price * (parseInt(setQuantity))) + totolPrice;
        })
    }
    console.log(price())

    // return component
    return (
        <div className='price-summary-container'>
            <div className='price-summary-title'>
                <label htmlFor='price-summary' className='price-summary-title-span'>Pricing Summary</label>
            </div>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--11">
                    <div>
                        <div className='price-summary-sub-title'>
                            <label htmlFor='subtotal' className="price-summary-sub-title-span">Subtotal</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label htmlFor='coupon' className="price-summary-sub-title-span">Coupon</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label htmlFor='gift-card' className="price-summary-sub-title-span">Gift Card</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label htmlFor='tax' className="price-summary-sub-title-span">Estimated tax</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label htmlFor='shipping' className="price-summary-sub-title-span">Estimated shipping</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label htmlFor='total' className='price-summary-estimated-total-span'> Estimated Total</label>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                    <div className='price-summary-sub-title'>
                        <label htmlFor='subtoatl-value' className="price-summary-sub-title-span">${totolPrice.toFixed(2)}</label>
                    </div>
                    <div className='price-summary-sub-title'>
                        <label htmlFor='coupon-value' className="price-summary-sub-title-span">-${35.43}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label htmlFor='gift-card-value' className="price-summary-sub-title-span">-${50}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label htmlFor='tax-value' className="price-summary-sub-title-span">${23.28}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label htmlFor='free' className="price-summary-sub-title-span">FREE</label>
                    </div>
                    <div className='price-summary-sub-title'>
                        <label htmlFor='toatl-value' className='price-summary-estimated-total-span'>${totolPrice.toFixed(2)}</label>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className='price-summary-imgs-container'>
                    <div>
                        <img className='price-summary-img-checkout' alt="checkout" src={checkout}>
                        </img>
                    </div>
                    <div>
                        <img className='price-summary-img-paypal' alt='payment' src={paypal}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceSummary;

