import { useDispatch } from 'react-redux';
import { action_fetchProductByCategory, action_setMenuBarStatus } from '../../actions/get-products';
import { STYLE } from "../../constant/common";
import x from '../../assests/images/x.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';

//sidebar
function Sidebar() {
    const dispatch = useDispatch();

    //fetch data based on slection of dropdown
    const handleFilterChange = (e: any) => {
        dispatch(action_fetchProductByCategory(e.target.value));
    };

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
                                {STYLE.map(function (key) {
                                    return (
                                        <div>
                                            <fieldset className='fieldset'>
                                                <input
                                                    className='chechbox-resize'
                                                    type="checkbox"
                                                    id={key.id}
                                                    name={key.filterLabel}
                                                    value={key.value}
                                                    onClick={handleFilterChange}
                                                // checked={checked}
                                                >
                                                </input>
                                                <span className='checkbox-span'>{key.filterLabel}</span>
                                            </fieldset>
                                        </div>
                                    );
                                })}
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


