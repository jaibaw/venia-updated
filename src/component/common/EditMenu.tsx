import trash from "../../assests/images/trash.svg";
import edit from "../../assests/images/edit.svg";
import heart from "../../assests/images/heart.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

function EditMenu() {
    //maintain state on refresh

    const handleDelete = () => {
        alert("product removed from the cart")
        window.localStorage.setItem('cartValue', ' ')
    }

    return (
        <div>
            <div className="edit__icon__container">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide">
                        <img className="edit__icons" src={edit} alt='edit-menu'></img>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--hide">
                        <label htmlFor="edit" className="edit__icon__span">Edit item</label>

                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide">
                        <Link to={ROUTES.DELETE_PRODUCT}>{
                            <img className="edit__icons" src={trash} alt='delete-menu' onClick={handleDelete} ></img>
                        }</Link>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--hide">
                        <Link to={ROUTES.DELETE_PRODUCT}  className="edit__icon__span">{
                            <label htmlFor="remove">Remove</label>
                        }</Link>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide">
                        <img className="edit__icons" src={heart} alt='save-menu'></img>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--hide">
                        <label htmlFor="save" className="edit__icon__span">Save for later</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMenu;

