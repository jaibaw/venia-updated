import { Link } from "react-router-dom";
import { ROUTES } from "../../../constant/routes";

// delete
const Accessories = () => {
    return (
        <div className="delete__container" >
            <div>
                <h1>Work In Progress....!</h1>
            </div>
            <div>
                <h1>!......Accessories......!</h1>
            </div>
            <div>
                <Link to={ROUTES.HOME}>
                    {
                        <button type="submit" className="checkout__step4__btn">
                            <span className="btn__span">
                                CLICK HERE!
                            </span>
                        </button>
                    }</Link>
            </div>
        </div>
    );
};

export default Accessories;