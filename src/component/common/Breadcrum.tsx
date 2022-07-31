import { Breadcrumbs, Link } from "@mui/material";
import { useSelector } from "react-redux";
// We can use inline-style


// braedcrum component
function Breadcrum(props: any) {
    //redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    return (
        <div className="breadcrum-container">
            <Breadcrumbs>
                <Link className="hide__link">
                    <label htmlFor='category' className="span-beadcrum"> Category</label>
                </Link>
                <Link className="hide__link">
                    {
                        (props.label) ?
                            <label htmlFor='name' className="span-beadcrum">{props.label}</label> :
                            <label htmlFor='product-category' className="span-beadcrum">{(Object.keys(productDetail).length > 0) ? productDetail.category : "Outerwear"}</label>
                    }
                </Link>
            </Breadcrumbs>

        </div>
    );
}

export default Breadcrum;

