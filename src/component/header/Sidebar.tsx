import { useDispatch, useSelector } from 'react-redux';
import { action_fetchProductByCategory, action_setMenuBarStatus } from '../../actions/get-products';
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

    useEffect(() => {
        setProduct(productList)
    }, [productList]);

    const [product, setProduct] = useState(productList);
    const [jewellery, setJewellery] = useState(false);
    const [men, setMen] = useState(false);
    const [women, setWomen] = useState(false);
    const [electronics, setElectronics] = useState(false);

    //fetch data based on slection of dropdown
    const handleFilterChange = (e: any) => {
        dispatch(action_fetchProductByCategory(e.target.value));
        dispatch(action_setMenuBarStatus(false));
    };

    const handleMenuClose = () => {
        dispatch(action_setMenuBarStatus(false));
    }

    const handleWomenChange = (e: any) => {
        women ? setWomen(false) : setWomen(true)
        dispatch(action_fetchProductByCategory(e.target.value));
    }

    const handleMenChange = (e: any) => {
        men ? setMen(false) : setMen(true)
        dispatch(action_fetchProductByCategory(e.target.value));
    }

    const handleJewelleryChange = (e: any) => {
        jewellery ? setJewellery(false) : setJewellery(true)
        dispatch(action_fetchProductByCategory(e.target.value));
    }

    const handleElectronicsChange = (e: any) => {
        electronics ? setElectronics(false) : setElectronics(true)
        dispatch(action_fetchProductByCategory(e.target.value));
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
                                            onClick={handleJewelleryChange}
                                            checked={jewellery}
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
                                            onClick={handleElectronicsChange}
                                            checked={electronics}
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
                                            onClick={handleMenChange}
                                            checked={men}
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
                                            onClick={handleWomenChange}
                                            checked={women}
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


