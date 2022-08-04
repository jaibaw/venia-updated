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
    const [men, setMen] = useState(false);
    const [smartGear, setSmarGear] = useState(false);
    const [accessories, setAccessories] = useState(false);

    //maintain state on refresh 
    const total = window.localStorage.getItem('cartValue');
    const cartValue = total ? total : ' ';


    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);
    const setCartQuantity = useSelector((state: any) => state.getProductList.setCartQuantity);

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
    }

    const handleClickWomen = () => {
        setHome(false);
        setWomen(true);
        setMen(false);
        setAccessories(false);
        setSmarGear(false);
    }
    const handleClickMen = () => {
        setHome(false);
        setWomen(false);
        setMen(true);
        setAccessories(false);
        setSmarGear(false);
    }
    const handleClickSmartGear = () => {
        setHome(false);
        setWomen(false);
        setMen(false);
        setAccessories(false);
        setSmarGear(true);
    }
    const handleClickAccessories = () => {
        setHome(false);
        setWomen(false);
        setMen(false);
        setAccessories(true);
        setSmarGear(false);
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
                                    src={venialogoupdated}>
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
                            <Link className="menu__bar__title__div" to={ROUTES.WOMEN}>
                                <li
                                    className='list-class'
                                    onClick={handleClickWomen}
                                ><span className={women ? 'home__span' : ""} >Women</span></li>
                            </Link>
                            <Link className="menu__bar__title__div" to={ROUTES.MEN}>
                                <li
                                    className='list-class'
                                    onClick={handleClickMen}
                                ><span className={men ? 'home__span' : ""} >Men</span></li>
                            </Link>
                            <Link className="menu__bar__title__div" to={ROUTES.SMART_GEAR}>
                                <li
                                    className='list-class'
                                    onClick={handleClickSmartGear}
                                ><span className={smartGear ? 'home__span' : ""} >{location.pathname === '/' ? 'Electronics' : 'Smart Gear'}</span></li>
                            </Link>
                            <Link className="menu__bar__title__div" to={ROUTES.ACCESSORIES}>
                                <li
                                    className='list-class'
                                    onClick={handleClickAccessories}
                                ><span className={accessories ? 'home__span' : ""} >{location.pathname === '/' ? 'Jewellery' : 'Accessories'}</span></li>
                            </Link>

                        </ul>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--3">
                        <ul className='menu-class'>
                            {
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
                            }
                        </ul>
                    </div>
                </nav>
            </div >

        </div >

    );
}

export default Appbar;