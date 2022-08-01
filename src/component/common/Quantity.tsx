import { useState } from "react";
import pluscircle from "../../assests/images/pluscircle.svg";
import minuscircle from "../../assests/images/minuscircle.svg";
import { useDispatch } from "react-redux";
import { action_setQuantity } from "../../actions/get-products";

// quntity selection
function Quantity(props: any) {
    const dispatch = useDispatch();

    //local state
    const [quantity, setquantity] = useState(1);
    const [quantityCart, setquantityCart] = useState(1);

    //on decrement
    const onChangeDecrement = (e: any) => {
        if (quantity > 1) {
            if (props.quantityId !== 0) {
                setquantity(quantity - 1)
                dispatch(action_setQuantity(quantity.toString()));
            } else {
                setquantityCart(quantityCart - 1)
                dispatch(action_setQuantity(quantityCart.toString()));
            }
        }
        //       window.localStorage.setItem('quantity', JSON.stringify(quantity))
    }

    //on increment
    const onChangeIncrement = (e: any) => {
        if (props.quantityId !== 0) {
            setquantity(quantity + 1)
            dispatch(action_setQuantity(quantity.toString()));
        } else {
            setquantityCart(quantityCart + 1)
            dispatch(action_setQuantity(quantityCart.toString()));
        }
        //     window.localStorage.setItem('quantity', JSON.stringify(quantity))
    }

    //retun component
    return (
        <div className="quantity__container">
            {
                <div>
                    <span >{<img id={props.quantityId} className="quantity__logo__minus" alt="decrement" src={minuscircle} onClick={onChangeDecrement}></img>
                    }</span>

                    <span id={props.quantityId} className="quantity__span">{(props.quantityId !== 0 ? quantity : quantityCart)}</span>

                    <span>{<img id={props.quantityId} className="quantity__logo__plus" alt='increment' src={pluscircle} onClick={onChangeIncrement}></img>
                    }</span>

                </div>
            }
        </div>
    );
}

export default Quantity;

