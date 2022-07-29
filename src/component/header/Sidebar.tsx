import { useDispatch } from 'react-redux';
import { action_fetchProductByCategory, action_setMenuBarStatus } from '../../actions/get-products';
import {  STYLE } from "../../constant/common";
import close from '../../assests/images/close.png';

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
        <div className='sidebar-container '>
            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12" >
                <div>
                    <div className='filter-title-div'>
                        <span className='sidebar-span'>Filters</span>
                        <img id='close' className='close-log' alt='close' src={close} onClick={handleMenuClose} ></img>
                    </div>
                    <div className="attr">
                        <div className='attr'>
                        </div>

                        <div className='sidebar-span-div'>
                            <span className='sidebar-span'>Attributes</span>
                        </div>
                        <div className='attr-bottom'>
                            {STYLE.map(function (key) {
                                return (
                                    <div>
                                        <fieldset  className='fieldset'>
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
        </div>
    );
}

export default Sidebar;


