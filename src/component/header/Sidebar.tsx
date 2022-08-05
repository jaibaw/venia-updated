import { useDispatch, useSelector } from 'react-redux';
import { action_fetchProductByCategorySelctions, action_setMenuBarStatus } from '../../actions/get-products';
import { STYLE } from "../../constant/common";
import x from '../../assests/images/x.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';
import { useEffect, useState } from 'react';

//sidebar
function Sidebar() {
    const dispatch = useDispatch();

    //redux state
    const productList = useSelector((state: any) => state.getProductList.getProductList);
    const [product, setProduct] = useState(productList);
    const [checkedProducts, setCheckedProducts] = useState<any[]>([]);;

    useEffect(() => {
        setProduct(productList)
    }, [productList]);

    useEffect(() => {
        dispatch(action_fetchProductByCategorySelctions(getFilteredProducts()))
    }, [checkedProducts])

    const handleFilterChange = (event: any) => {
        dispatch(action_setMenuBarStatus(false));
        const categoryName = event.target.value;
        setCheckedProducts((prev: any) =>
            checkedProducts.includes(categoryName)
                ? prev.filter((cur: any) => cur !== categoryName)
                : [...prev, event.target.value]
        );
    }

    const getFilteredProducts = () => {
        return product.filter((product: any) => checkedProducts.includes(product.category));
    }

    const handleMenuClose = () => {
        dispatch(action_setMenuBarStatus(false));
    }

    //return component
    return (
        <div>
            <div className='sidebar-container '>

                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--hide" >
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--hide'>
                        <div className='filter-title-div'>
                            <span>Filters</span>
                            <img id='close' className='close-log' alt='close' src={x} onClick={handleMenuClose} ></img>
                        </div>
                        <div className="attr">
                            <div className='attr'>
                            </div>

                            <div className='sidebar-span-div'>
                                <span className='sidebar-span'>Categories</span>
                            </div>
                            <div className='attr-bottom'>

                                <div>
                                    <fieldset className='fieldset'>
                                        <input
                                            className='chechbox-resize'
                                            type="checkbox"
                                            id="jewellery"
                                            name="jewelery"
                                            value="jewelery"
                                            onClick={handleFilterChange}
                                        >
                                        </input>
                                        <span className='checkbox-span'>Jewellery</span>
                                    </fieldset>
                                </div>

                                <div>
                                    <fieldset className='fieldset'>
                                        <input
                                            className='chechbox-resize'
                                            type="checkbox"
                                            id="electronics"
                                            name="electronics"
                                            value="electronics"
                                            onClick={handleFilterChange}
                                        >
                                        </input>
                                        <span className='checkbox-span'>Electronics</span>
                                    </fieldset>
                                </div>

                                <div>
                                    <fieldset className='fieldset'>
                                        <input
                                            className='chechbox-resize'
                                            type="checkbox"
                                            id="men's clothing"
                                            name="men's clothing"
                                            value="men's clothing"
                                            onClick={handleFilterChange}
                                        >
                                        </input>
                                        <span className='checkbox-span'>Men's clothing</span>
                                    </fieldset>
                                </div>

                                <div>
                                    <fieldset className='fieldset'>
                                        <input
                                            className='chechbox-resize'
                                            type="checkbox"
                                            id="women's clothing"
                                            name="women's clothing"
                                            value="women's clothing"
                                            onClick={handleFilterChange}
                                        >
                                        </input>
                                        <span className='checkbox-span'>Women's clothing</span>
                                    </fieldset>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Phone View */}
                <div className='banner-phone'>
                    <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">

                        <div>
                            <div className='filter-title-div'>
                                <span>Filters</span>
                                <img id='close' className='close-log' alt='close' src={x} onClick={handleMenuClose} ></img>
                            </div>
                            <div className='clear__all__sapn__div'>
                                <span>
                                    Clear all
                                </span>
                            </div>
                            <div className="attr">
                                <div className='sidebar-span-div'>
                                    <span className='sidebar-span'>Categories</span>
                                </div>
                                <div className='attr-bottom'>
                                    {STYLE.map(function (key) {
                                        return (
                                            <div>
                                                <Link to={ROUTES.PRODUCT_LIST}>{

                                                    <fieldset className='fieldset'>
                                                        <input
                                                            className='chechbox-resize'
                                                            type="checkbox"
                                                            id={key.id}
                                                            name={key.filterLabel}
                                                            value={key.value}
                                                            onClick={handleFilterChange}
                                                        >
                                                        </input>
                                                        <span className='checkbox-span'>{key.filterLabel}</span>
                                                    </fieldset>
                                                }</Link>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                            <div className='sidebar__btn'>
                                <Link to={ROUTES.HOME}>{
                                    <button type="button" className="shop__now__btn" onClick={handleMenuClose}>
                                        SEE 17 RESULTS
                                    </button>
                                }</Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/* {phone view end} */}

            </div>
        </div>
    );
}

export default Sidebar;


