import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';

//recently viewed products
function RecentlyViewCartProduct() {
    //redux state
    const productList = useSelector((state: any) => state.getProductList.getProductList);
    
    //temp : hardcoded-showing 4 products
    const recentViewList = productList.slice(0, 4);

    //return component
    return (
        <div className='product-display-list-container'>
            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--hide">
                {recentViewList && recentViewList.map(function (key: any) {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                            <div className='recent-product-display-container'>
                                <div className='product-display-img-div'>
                                    <Link to={ROUTES.PRODUCT_LIST}>
                                        {<img
                                            className='recent-product-img'
                                            src={key.image}
                                            id={key.id}
                                            alt='recent-product-list'
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
                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default RecentlyViewCartProduct;

