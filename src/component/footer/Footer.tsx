import venia_logo from '../../assests/images/venia-logo.jpg';
import facebook from '../../assests/images/facebook.svg';
import twitter from '../../assests/images/twitter.svg';
import instagram from '../../assests/images/instagram.svg';
import { ROUTES } from '../../constant/routes';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
    const location = useLocation()

    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    return (
        <div className={setMenuBarStatus ? 'display-list' : 'footer-container'}    >
            <div className={location.pathname === '/checkout' ? 'checkout__btn__display' : 'footer-main-container'}>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-sub-container'>
                            <span className='footer-heading-span '>Account</span>
                            <ul className='footer-sub-heading-sapn'>
                                <li className='footer-heading-listing-span' >Sign In</li>
                                <li className='footer-heading-listing-span'>Register</li>
                                <li className='footer-heading-listing-span'>Order Status</li>
                            </ul>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-sub-container'>
                            <span className='footer-heading-span '>About Us </span>
                            <ul className='footer-sub-heading-sapn'>
                                <li className='footer-heading-listing-span'>
                                    Our Story
                                </li>
                                <li className='footer-heading-listing-span'>
                                    Carrers
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer-sub-container'>
                            <span className='footer-heading-span '>Help</span>
                            <ul className='footer-sub-heading-sapn'>
                                <li className='footer-heading-listing-span'>
                                    Contact Us
                                </li>
                                <li className='footer-heading-listing-span'>
                                    Order Status
                                </li>
                                <li className='footer-heading-listing-span'>
                                    Return
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div>
                            <span className='footer-heading-span-follow'>Follow Us!</span>
                            <ul className='footer-sub-heading-sapn'>
                                <li className='footer-heading-listing-span'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </li>
                                <a href='https://www.instagram.com/'>
                                    <img className='footer-social-media-logo' src={instagram} alt='instagram'></img>
                                </a>
                                <a href='https://www.facebook.com/'>
                                    <img className='footer-social-media-logo' src={facebook} alt='facebook'></img>
                                </a>
                                <a href='https://twitter.com/'>
                                    <img className='footer-social-media-logo' src={twitter} alt='twitter'></img>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copy-right-container'>
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                        <Link to={ROUTES.HOME}>{<img className='footer-venia-logo' alt='venia-logo' src={venia_logo}></img>}</Link>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                        <div className='footer-copy-right-div'>
                            <span className='footer-copy-right-span'>© Company Name Address Ave, City Name, State ZIP</span>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                        <div className='footer-term-policy-container'>

                            <span className='footer-term-policy-span'>
                                Terms of Use
                            </span>
                            <span className='footer-term-policy-span'>
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                </div>

                {/* Phone View */}
                <div className='banner-phone'>
                    <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">
                        <div className='aem-GridColumn aem-GridColumn--phone--12'>
                            <div className='footer__term__policy__phone'>
                                <div className='footer-term-policy-container'>
                                    <span className='footer-term-policy-span'>
                                        Terms of Use
                                    </span>
                                    <span className='footer-term-policy-span'>
                                        Privacy Policy
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--phone--12'>
                            <div>
                                <div className='footer__copy__right__div '>
                                    <div  className='footer-copy-right-span'>
                                        <span >© Company Name</span>
                                    </div>
                                    <div  className='footer-copy-right-span'>
                                        <span> Address Ave, City Name, State ZIP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--phone--12'>
                            <div className='footer__logo'>
                                <Link to={ROUTES.HOME}>{<img className='footer-venia-logo' alt='venia-logo' src={venia_logo}></img>}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;