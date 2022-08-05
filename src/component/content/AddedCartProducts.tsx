import SimpleAccordion from '../common/Accordian';
import EditMenu from '../common/EditMenu';
import Quantity from '../common/Quantity';
import morehorizontal from '../../assests/images/morehorizontal.svg';
import { useState } from 'react';

// added products in cart
function AddedCartProducts() {

    const [showMenuItem, setshowshowMenuItem] = useState(false);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('cart');
    let uniqueCartItemList = Product ? JSON.parse(Product) : [];

    const handleThreeMenuIcon = () => {
        setshowshowMenuItem(true)
    }

    //return component
    return (
        <div className='added-item-cart-container'>

            {uniqueCartItemList && uniqueCartItemList.map((key: any) => {
                return (
                    <div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--5">
                                <div className='added-cart-product'>
                                    <img className='added-cart-product-img' alt='product' src={key.image}>
                                    </img>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6">
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


                            <div className="aem-GridColumn--phone--1">
                                <div className="dropdown">
                                    <div className='hide-three-menu-icon'>
                                        <img
                                            src={morehorizontal}
                                            className='three-menu-logo '
                                            alt='icon'
                                            onClick={handleThreeMenuIcon}
                                        ></img>
                                    </div>
                                    <div className={showMenuItem ? "checkout__info__show" : "checkout__info__hide"}>
                                        <EditMenu />
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide">
                                <div className='added-product-quantity'>
                                    <Quantity
                                        quantityId={key.id}
                                    />
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                                <EditMenu />
                            </div>
                        </div>
                        <div className='product-display-phone-view'>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn  aem-GridColumn--phone--12">
                                    <div className='added-product-quantity'>
                                        <Quantity
                                            quantityId={key.id}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                );

            })}

            <div>
                <div className="aem-Grid aem-Grid--12">
                    <SimpleAccordion />
                </div>
            </div>

        </div >
    );
}

export default AddedCartProducts;

