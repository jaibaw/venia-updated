import { useEffect } from 'react';
import { useSelector } from "react-redux";
import Banner from '../component/header/Banner';
import Sidebar from '../component/header/Sidebar';
import ProductDisplay from '../component/content/ProductDisplay';

//product list
function ProductList() {
    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);


    useEffect(() => {
        //maintain state on refresh 
        window.localStorage.setItem('cartValue', ' ')
    });

    return (
        <div className="aem-Grid aem-Grid--12">
            <div className={setMenuBarStatus ? 'display-list' : 'product-list-container'}     >
                <div className="aem-Grid aem-Grid--12">
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
                        <Banner />
                    </div>
                </div>

                <div className="aem-Grid aem-Grid--12">
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide'>
                        <Sidebar />
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
                        <ProductDisplay />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductList;

