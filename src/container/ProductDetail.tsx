import { useSelector } from 'react-redux';
import SingleProductDetails from '../component/content/SingleProductDetails';
import SingleProductDisplay from '../component/content/SingleProductDisplay';

// product details container
function ProductDetail() {
    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    //return component
    return (
        <div className={setMenuBarStatus ? 'display-list' : 'product-detail-container'} >
            <div className="aem-Grid aem-Grid--12">

                <div className='aem-GridColumn aem-GridColumn--default--5  aem-GridColumn--phone--hide'>
                    <SingleProductDisplay />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--hide'>
                    <div className='product-detail-sub-container'>
                        <SingleProductDetails />
                    </div>
                </div>
            </div>

            <div className="product-display-phone-view">
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12">
                    <div className='aem-GridColumn aem-GridColumn--phone--12'>
                        <SingleProductDetails />
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--phone--12'>
                        <div className='product-detail-sub-container'>
                            <SingleProductDisplay />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

