import venia_logo from '../../assests/images/venia-logo.jpg';
import search from '../../assests/images/search.svg';
import user from '../../assests/images/user.svg';
import archive from '../../assests/images/archive.svg';
import { ROUTES } from '../../constant/routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import menu from '../../assests/images/menu.png';
// import Sidebar from './Sidebar';
import { useState } from 'react';
import { action_setMenuBarStatus } from '../../actions/get-products';

//appbar
function Appbar() {
    const dispatch = useDispatch();

    //local state
    const [menuBar, setMenuBar] = useState(false);

    //maintain state on refresh 
    const total = window.localStorage.getItem('cartValue');
    const cartValue = total ? total : ' ';

    //redux state
    const setCartQuantity = useSelector((state: any) => state.getProductList.setCartQuantity);
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
                                {/* <Sidebar /> */}
                            </div>
                        }
                    </div>
                    <div className={menuBar ? 'menu' : "aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--7"} >
                        <Link to={ROUTES.PRODUCT_LIST}>{<img className={setMenuBarStatus ? 'list-class' : 'venia-logo'} alt='venia-logo' src={venia_logo}></img>}</Link>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--hide">
                        <ul className='menu-class'>
                            <li className='list-class-women'>Women</li>
                            <li className='list-class'>Men</li>
                            <li className='list-class'>Smart Gear</li>
                            <li className='list-class'>Accessories</li>
                        </ul>
                    </div>
                    <div className={menuBar ? 'menu' : "aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--3"}>
                        <ul className='menu-class'>
                            <img className={setMenuBarStatus ? 'list-class' : 'search-logo'} alt='search' src={search}></img>
                            <li className='list-class'>Search</li>

                            <img className='sign-in-logo' alt='sign-in' src={user}></img>
                            <li className='list-class'> Sign in</li>

                            {
                                cartValue !== ' ' ?
                                    <Link to={ROUTES.SHOPPING_CART}> {cartValue === ' ' ? setCartQuantity : cartValue} {<img className={setMenuBarStatus ? 'list-class' : 'search-logo'} alt='cart' src={archive}></img>}</Link>
                                    : <img className={setMenuBarStatus ? 'list-class' : 'search-logo'} alt='cart' src={archive}></img>
                            }
                        </ul>
                    </div>
                </nav>
            </div>

        </div>

    );
}

export default Appbar;