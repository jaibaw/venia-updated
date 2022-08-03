import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import "react-image-gallery/styles/css/image-gallery.css";
import mengroup from "../../assests/images/mengroup.png";
import { useLocation } from 'react-router-dom';

const ImgSlider = () => {

  const location = useLocation();
  const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

  const Product = window.localStorage.getItem('data');
  const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})

  const singleProductDetailimages = [
    {
      original: singleProductDetail.image,
    },
    {
      original: singleProductDetail.image,
    },
    {
      original: singleProductDetail.image,
    },
    {
      original: singleProductDetail.image,
    },
    {
      original: singleProductDetail.image,
    },
  ];

  const homePageimages = [
    {
      original: mengroup,
    }, {
      original: mengroup,
    }, {
      original: mengroup,
    },
  ];

  return (
    <div>
      <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        showBullets={true}
        showNav={false}
        items={(location.pathname === '/') ? homePageimages : singleProductDetailimages}
        showPlayButton={false}
      />
    </div>
  );
};

export default ImgSlider;