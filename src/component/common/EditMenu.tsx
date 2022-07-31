import trash from "../../assests/images/trash.svg";
import edit from "../../assests/images/edit.svg";
import heart from "../../assests/images/heart.svg";

function EditMenu() {
    return (
        <div>
            <div className="edit-icon-container">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide">
                        <img className="edit-icons" src={edit} alt='edit-menu'></img>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--hide">
                        <label htmlFor="edit" className="edit-icon-span">Edit item</label>

                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide">
                        <img className="edit-icons" src={trash} alt='delete-menu'></img>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--hide">
                        <label htmlFor="remove" className="edit-icon-span">Remove</label>

                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide">
                        <img className="edit-icons" src={heart} alt='save-menu'></img>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--hide">
                        <label htmlFor="save" className="edit-icon-span">Save for later</label>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default EditMenu;

