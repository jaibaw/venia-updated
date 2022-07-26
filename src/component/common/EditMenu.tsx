import trash from "../../assests/images/trash.svg";
import edit from "../../assests/images/edit.svg";
import heart from "../../assests/images/heart.svg";

function EditMenu() {
    return (
        <div>
            <div className="edit-icon-container">
                <div>
                    <img className="edit-icons" src={edit} alt='edit-menu'></img>
                    <label  htmlFor="edit" className="edit-icon-span">Edit item</label>
                </div>
                <div>
                    <img className="edit-icons" src={trash} alt='delete-menu'></img>
                    <label htmlFor="remove" className="edit-icon-span">Remove</label>
                </div>
                <div>
                    <img className="edit-icons" src={heart} alt='save-menu'></img>
                    <label htmlFor="save" className="edit-icon-span">Save for later</label>
                </div>
            </div>
        </div>
    );
}

export default EditMenu;

