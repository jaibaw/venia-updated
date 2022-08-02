import venialogoupdated from '../../assests/images/venialogoupdated.jpg';
import shoppingbag from '../../assests/images/shoppingbag.svg';
import { ROUTES } from '../../constant/routes';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import menu from '../../assests/images/menu.png';
import { useState } from 'react';
import { action_setMenuBarStatus } from '../../actions/get-products';
import Sidebar from './Sidebar';

//appbar
function Appbar() {
    const dispatch = useDispatch();
    const location = useLocation();

    //local state
    const [menuBar, setMenuBar] = useState(false);

    //maintain state on refresh 
    const total = window.localStorage.getItem('cartValue');
    const cartValue = total ? total : ' ';

    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    const handleMenuBar = () => {
        setMenuBar(true);
        dispatch(action_setMenuBarStatus(true));
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
                                <Sidebar />
                            </div>
                        }
                    </div>
                    <div className={menuBar ? 'menu' : "aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--7"} >
                        <Link to={ROUTES.HOME}>{<img className={setMenuBarStatus ? 'list-class' : 'venia-logo'} alt='venia-logo' src={venialogoupdated}></img>}</Link>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--hide">
                        <ul className='menu-class'>
                            <li className='list-class-women'><span className='home__span' >Home</span></li>
                            <li className='list-class'>Women</li>
                            <li className='list-class'>Men</li>
                            <li className='list-class'>Smart Gear</li>
                            <li className='list-class'>Accessories</li>
                        </ul>
                    </div>
                    <div className={menuBar ? 'menu' : "aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--3"}>
                        <ul className='menu-class'>
                            {
                                ((cartValue === ' ') || (location.pathname === '/delete-product')) ?
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
                                                        className={setMenuBarStatus ? 'list-class' : 'search-logo'}
                                                        alt='cart' src={shoppingbag}>
                                                    </img>
                                                    <span className='badge'>{cartValue === ' ' ? 0 : cartValue}</span>
                                                </div>
                                            }
                                        </Link>
                                    </div>

                            }
                        </ul>
                    </div>
                </nav>
            </div>

        </div>

    );
}

export default Appbar;