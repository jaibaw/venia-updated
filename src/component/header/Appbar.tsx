import venialogoupdated from '../../assests/images/venialogoupdated.jpg';
import shoppingbag from '../../assests/images/shoppingbag.svg';
import { ROUTES } from '../../constant/routes';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import menu from '../../assests/images/menu.svg';
import { useState } from 'react';
import { action_setMenuBarStatus } from '../../actions/get-products';
import Sidebar from './Sidebar';

//appbar
function Appbar() {
    const dispatch = useDispatch();
    const location = useLocation();

    //local state
    const [menuBar, setMenuBar] = useState(false);

    const [home, setHome] = useState(true);
    const [women, setWomen] = useState(false);
    const [electronics, setElectronics] = useState(false);
    const [jewellery, setJewellery] = useState(false);
    const [men, setMen] = useState(false);

    const [smartGear, setSmarGear] = useState(false);
    const [accessories, setAccessories] = useState(false);

    //maintain state on refresh 
    const total = window.localStorage.getItem('cartValue');
    const cartValue = total ? total : ' ';


    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);
    const setCartQuantity = useSelector((state: any) => state.getProductList.setCartQuantity);
    let cartItemList = useSelector((state: any) => state.getProductList.cartItemList);


    const handleMenuBar = () => {
        setMenuBar(true);
        dispatch(action_setMenuBarStatus(true));
    }

    const handleClickHome = () => {
        setHome(true);
        setWomen(false);
        setMen(false);
        setAccessories(false);
        setSmarGear(false);
        setElectronics(false);
        setJewellery(false);
    }

    const handleClickWomen = () => {
        setHome(false);
        setWomen(true);
        setMen(false);
        setAccessories(false);
        setSmarGear(false);
        setElectronics(false);
        setJewellery(false);
    }

    const handleClickMen = () => {
        setHome(false);
        setWomen(false);
        setMen(true);
        setAccessories(false);
        setSmarGear(false);
        setElectronics(false);
        setJewellery(false);
    }

    const handleClickSmartGear = (e: any) => {
        setHome(false);
        setWomen(false);
        setMen(false);
        setAccessories(false);
        setSmarGear(true);
        setElectronics(false);
        setJewellery(false);
    }

    const handleClicksetElectronics = (e: any) => {
        setHome(false);
        setWomen(false);
        setMen(false);
        setAccessories(false);
        setSmarGear(false);
        setElectronics(true);
        setJewellery(false);
    }


    const handleClickJewellery = (e: any) => {
        setHome(false);
        setWomen(false);
        setMen(false);
        setAccessories(false);
        setSmarGear(false);
        setElectronics(false);
        setJewellery(true);
    }

    const handleClickAccessories = (e: any) => {
        setHome(false);
        setWomen(false);
        setMen(false);
        setAccessories(true);
        setSmarGear(false);
        setElectronics(false);
        setJewellery(false);
    }

    const hadleReturnHome = (e: any) => {
        if(location.pathname === '/delete-product'){
            cartItemList.length = 0
        }
    }

    //return component
    return (

        <div className="aem-Grid aem-Grid--12">
            <div className='header-container'>
                <nav className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--2">
                        <img className='menu' alt='menu' src={menu} onClick={handleMenuBar}></img>
                        {
                            setMenuBarStatus &&
                            <div className="aem-GridColumn aem-GridColumn--phone--12">
                                <div className={menuBar ? "checkout__info__show" : "checkout__info__hide"}>
                                    <Sidebar />
                                </div>
                            </div>
                        }
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--7" >
                        <div className='venia__logo__allignment'>
                            <Link to={ROUTES.HOME}>
                                {<img
                                    className='venia-logo'
                                    alt='venia-logo'
                                    src={venialogoupdated}

                                    onClick={hadleReturnHome}>
                                </img>}
                            </Link>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--hide">
                        <ul className='menu-class'>
                            <Link className="menu__bar__title__div" to={ROUTES.HOME}>
                                <li
                                    className='list-class-women'
                                    onClick={handleClickHome}
                                ><span className={home ? 'home__span' : ""} >Home</span></li>
                            </Link>
                            <Link className="menu__bar__title__div" to={ROUTES.PRODUCT_LIST}>
                                <li
                                    className='list-class'
                                    onClick={handleClickWomen}
                                ><span className={women ? 'home__span' : ""} >Women</span></li>
                            </Link>
                            <Link className="menu__bar__title__div" to={ROUTES.PRODUCT_LIST}>
                                <li
                                    className='list-class'
                                    onClick={handleClickMen}
                                ><span className={men ? 'home__span' : ""} >Men</span></li>
                            </Link>
                            <Link className={location.pathname === '/' ? "menu__bar__title__div list__menu__show" : "list__menu__hide"}
                                to={ROUTES.PRODUCT_LIST}>
                                <li
                                    className='list-class'
                                    onClick={handleClicksetElectronics}
                                ><span className={electronics ? 'home__span' : ""} >Electronics</span></li>
                            </Link>

                            <Link
                                className={location.pathname === '/' ? "menu__bar__title__div list__menu__show" : "list__menu__hide"}
                                to={ROUTES.PRODUCT_LIST}>
                                <li
                                    className='list-class'
                                    onClick={handleClickJewellery}
                                ><span className={jewellery ? 'home__span' : ""} >Jewellery</span></li>
                            </Link>

                            <Link
                                className={location.pathname === '/' ? "list__menu__hide" : "menu__bar__title__div list__menu__show"}
                                to={ROUTES.SMART_GEAR}>
                                <li
                                    className='list-class'
                                    onClick={handleClickSmartGear}
                                ><span className={smartGear ? 'home__span' : ""} >Smart Gear</span></li>
                            </Link>


                            <Link
                                className={location.pathname === '/' ? "list__menu__hide" : "menu__bar__title__div list__menu__show"}
                                to={ROUTES.ACCESSORIES} >
                                <li
                                    className='list-class'
                                    onClick={handleClickAccessories}
                                ><span className={accessories ? 'home__span' : ""} >Accessories</span></li>
                            </Link>

                        </ul>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--3">
                        <ul className='menu-class'>
                            {/* {
                                ((cartValue === ' ' && setCartQuantity === '') || (location.pathname === '/delete-product')) ?
                                    <div>
                                        <img
                                            className={setMenuBarStatus ? 'list-class' : 'search-logo'}
                                            alt='cart'
                                            src={shoppingbag}>
                                        </img>
                                    </div>
                                    :
                                    <div>
                                        <Link to={ROUTES.SHOPPING_CART}>
                                            {
                                                <div className='badge__div'>
                                                    <img
                                                        className='search-logo'
                                                        alt='cart' src={shoppingbag}>
                                                    </img>
                                                    <span className='badge'>{cartValue === ' ' ? setCartQuantity : cartValue}</span>
                                                </div>
                                            }
                                        </Link>
                                    </div>
                            } */}
                            <div>
                                <Link to={ROUTES.SHOPPING_CART}>
                                    {
                                        <div className='badge__div'>
                                            <img
                                                className='search-logo'
                                                alt='cart' src={shoppingbag}>
                                            </img>
                                            <span className='badge'>{cartValue === ' ' ? 0 : cartValue}</span>
                                        </div>
                                    }
                                </Link>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div >

        </div >

    );
}

export default Appbar;