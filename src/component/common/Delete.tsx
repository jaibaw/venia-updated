import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { action_setCartQuantity } from "../../actions/get-products";
import { ROUTES } from "../../constant/routes";
import remove from "../../assests/images/remove.gif";

// delete
const Delete = () => {
    const dispatch = useDispatch();

    let cartItemList = useSelector((state: any) => state.getProductList.cartItemList);

    const handleClick = () => {
        cartItemList.length = 0
        window.localStorage.setItem('cartValue', ' ')
        window.localStorage.setItem('cart', JSON.stringify([]))
        dispatch(action_setCartQuantity(""));
    }

    return (
        <div className="delete__container " >
            <div className='shopping__0cart__item__div'>
                <div>
                    <img alt="delete" className='shopping__cart__img' src={remove}></img>
                </div>

                <div>
                    <h1>Product Removed From The Cart :(</h1>
                </div>

                <div>
                    <Link to={ROUTES.HOME}>
                        {
                            <button type="submit" className="checkout__step4__btn" onClick={handleClick}>
                                <span className="btn__span">
                                    SHOP NOW
                                </span>
                            </button>
                        }</Link>
                </div>

            </div>
        </div>
    );
};

export default Delete;