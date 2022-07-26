import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_fetchSingleProduct, action_setQuantity } from '../../actions/get-products';
import heart from "../../assests/images/heart.svg";
import Pagination from '../common/pagination/Pagination';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';
import Loader from '../common/Loader';
import { PAGE_SIZE } from '../../constant/common';

//product diaplay componenet
function ProductDisplay() {
    const dispatch = useDispatch();

    // maintain local state
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(true);

    //redux state
    const productList = useSelector((state: any) => state.getProductList.getProductList);

    useEffect(() => {
        if (productList.length > 1) {
            setLoader(false)
        }
    }, [productList]);

    // pagination
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    const currentProductList = productList.slice(firstPageIndex, lastPageIndex);

    //on product click dispatch single product detail
    const onProductClick = (e: any) => {
        dispatch(action_fetchSingleProduct(parseInt(e.target.id)));
        dispatch(action_setQuantity('1'));
    }

    //return component
    return (
        <div className='product-display-list-container'>
            <div>
                {loader && <Loader loader={loader} />}
            </div>
            <div className='product-dispaly-sub-container'>
                <div className="aem-Grid aem-Grid--12">
                    {currentProductList && currentProductList.map(function (key: any) {
                        return (
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6">
                                <div className='product-display-container'>
                                    <div className='product-display-img-div'>
                                        <Link to={ROUTES.PRODUCT_DETAILS}> 
                                           {<img
                                                className='product-img'
                                                alt='product'
                                                src={key.image}
                                                id={key.id}
                                                onClick={onProductClick}
                                            >
                                            </img>
                                            }
                                        </Link>
                                    </div>
                                    <div className='product-discription'>
                                        <div>
                                            <label htmlFor='title'>{key.title}</label>
                                        </div>
                                        <div>
                                            <label htmlFor='price' >${key.price}</label>
                                        </div>
                                        <div>
                                            <img alt='save' src={heart}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12">
                <div className='pagination'>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={productList && productList ? productList.length : 0}
                        pageSize={PAGE_SIZE}
                        onPageChange={(page: any) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;