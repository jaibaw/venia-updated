import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CONST_VALUE } from '../../constant/common';
import Loader from "../common/Loader";
import Breathable from '../../assests/images/Breathable.png';
import fabricdetails from '../../assests/images/fabricdetails.png';
import Lightweightfabric from '../../assests/images/Lightweightfabric.png';
import Sweatwicking from '../../assests/images/Sweatwicking.png';

// single product display
function SingleProductDisplay() {

    const [loader, setLoader] = useState(true);

    // redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})


    // return component
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div>
                    {!productDetail && <Loader loader={true} />}
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide'>
                    {
                        <div>
                            {
                                IMG_CONST_VALUE.map((key) => {
                                    return (
                                        <div className='side-product-div'>
                                            <img className='side-product-display' alt='product' src={singleProductDetail.image}>
                                            </img>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    }
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--hide'>
                    <div className='product-display'>
                        <img className="single-img-display" alt='product' src={singleProductDetail.image}>
                        </img>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="details-div">
                    <div>
                        <label htmlFor='title' className='product-title-span-display'>
                            {singleProductDetail.title}
                        </label>
                    </div>
                    <div>
                        <label htmlFor='description' className='product-discription-span'>
                            Description
                        </label>
                    </div>
                    <div>
                        <p>
                            {singleProductDetail.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="product-display-phone-view">
                <div className="fabric-detail-div">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="product-attribute">
                            <label htmlFor='details' className="product-attribute-span">Details</label>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                            <div>
                                <img className="fabric-details-logo" alt='sweatwicking' src={Sweatwicking}></img>
                                <label htmlFor='details'>
                                    Sweat-wicking
                                </label>
                            </div>
                            <div>
                                <img className="fabric-details-logo" alt='lightweightfabric' src={Lightweightfabric}></img>
                                <label htmlFor='details'>
                                    Lightweight fabric
                                </label>
                            </div>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                            <div>
                                <img className="fabric-details-logo" alt='breathable' src={Breathable}></img>
                                <label htmlFor='details'>
                                    Breathable
                                </label>
                            </div>
                            <div>
                                <img className="fabric-details-logo" alt='fabricdetails' src={fabricdetails}></img>
                                <label htmlFor='details'>
                                    69% nylon, 31% lycra
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='end-border'>

            </div>
        </div>
    );
}

export default SingleProductDisplay;

