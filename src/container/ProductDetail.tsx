import SingleProductDisplay from '../component/content/SingleProductDisplay';

// product details container
function ProductDetail() {
   
    //return component
    return (
        <div className='product-detail-container' >
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--12  aem-GridColumn--phone--12'>
                    <SingleProductDisplay />
                </div>
              
            </div>        
        </div>
    );
}

export default ProductDetail;

