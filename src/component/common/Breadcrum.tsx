import { Breadcrumbs, Link } from "@mui/material";
import { useSelector } from "react-redux";

// braedcrum component
function Breadcrum(props: any) {
    //redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    return (
        <div className="breadcrum-container">
            <Breadcrumbs>
                <Link>
                    <label  htmlFor='category' className="span-beadcrum"> Category</label>
                </Link>
                <Link>
                    {
                        (props.label) ?
                            <label htmlFor='name' className="span-beadcrum">{props.label}</label> :
                            <label htmlFor='product-category' className="span-beadcrum">{ (Object.keys(productDetail).length > 0) ? productDetail.category : "Dressing"}</label>
                    }
                </Link>
            </Breadcrumbs>

        </div>
    );
}

export default Breadcrum;

