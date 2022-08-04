import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import mengroupcrop from "../../assests/images/mengroupcrop.png";
import mensky from "../../assests/images/mensky.png";
import menstand from "../../assests/images/menstand.png";
import mappin from "../../assests/images/mappin.svg";
import chevronleft from "../../assests/images/chevronleft.svg"
import { CATEGORY } from "../../constant/common";
import ImgSlider from "../common/ImgSlider";

//home
function HomePage() {
    return (
        <div className="homepage-container">
            <div className="home-page-sub-container-1">
                <div className="aem-Grid aem-Grid--12">

                    <div className="aem-GridColumn aem-GridColumn--default--1  aem-GridColumn--phone--hide">
                        <div>
                            <img className="back__arraow" src={chevronleft} alt="chevronleft">
                            </img>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--hide">
                        <div>
                            <div className="home__title__div">
                                <label htmlFor="home-title">
                                    Shop the new <br></br> Signature Collection
                                </label>
                            </div>
                            <div className="home__title__discription__div">
                                <label  htmlFor="home-title-discription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ar dolore magna aliqua. Labortis mattis <br></br> aliquam faucibus purus
                                </label>
                            </div>
                            <div>
                                <Link to={ROUTES.PRODUCT_LIST}>{
                                    <button id = "shop-now" name="shop-now" type="button" className="shop__now__btn">
                                        SHOP NOW
                                    </button>
                                }</Link>
                            </div>
                        </div>


                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                        <div>
                            <img className="man__grp__img" src={mengroupcrop} alt='men-group'>
                            </img>
                        </div>
                    </div>
                </div>
                {/* Phone View */}
                <div className='banner-phone'>
                    <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">
                        <div className='aem-GridColumn aem-GridColumn--phone--12'>
                            <div className="man__grp__img" >
                                <ImgSlider />
                            </div>
                        </div>

                        <div>
                            <div className="shop__now__detail">
                                <div className="shop__now__details__div">
                                    <div className="home__title__div">
                                        <label htmlFor="home-title">
                                            <span>Shop the new</span>  <br></br> <span>Signature Collection</span>
                                        </label>
                                    </div>
                                    <div className="home__title__discription__div">
                                        <label htmlFor="home-title-disciption">
                                            Lorem ipsum dolor sit amet, consectetur  <br></br>adipiscing elit, sed do eiusmod tempor   </label>
                                    </div>
                                    <div>
                                        <Link to={ROUTES.PRODUCT_LIST}>{
                                            <button  id="shop-now" name="shop-now" type="button" className="shop__now__btn shop__now__btn__phone__home">
                                                SHOP NOW
                                            </button>
                                        }</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* {phone view end} */}
            </div>

            <div className="home-page-sub-container-2">
                <div className="home-page-margin-botton">
                    <div className="aem-Grid aem-Grid--12">
                        {
                            CATEGORY.map((key) => {
                                return (
                                    <div className="aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12">
                                        <div className="category__img__container" >
                                            <div className="category__img__list__div">
                                                <Link to={ROUTES.PRODUCT_LIST}>{
                                                    <img className="category-img" id={key.id} src={key.img} alt='category-list'>
                                                    </img>}
                                                </Link>
                                            </div>
                                            <div className="category__img__div">
                                                <div className="category__img__span__div">
                                                    <label htmlFor="category-name">
                                                        {key.name}
                                                    </label>
                                                </div>
                                                <div className="category__span__div__for__tablet">
                                                    <label htmlFor="category-sub-title" className="category__img__sub__span ">
                                                        Lorem ipsum dolor sit amet
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="home-page-margin-botton">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--phone--hide">
                            <div className="home__title__1__div">
                                <div className="home__title__1">
                                    <label htmlFor="home-title-1">
                                        Take off in the new Signature Legging
                                    </label>
                                </div>
                                <div className="home__subtitle__1">
                                    <label htmlFor="home-subtitle-1">
                                        Lorem Ipsum Dolor Tempor
                                    </label>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                </div>
                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                                        <div>
                                            <Link to={ROUTES.PRODUCT_LIST}>{
                                                <button id="shop-collection" name="shop-collection" type="button" className="shop__cont__btn">
                                                    SHOP COLLECTION
                                                </button>
                                            }</Link>

                                        </div>

                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                                        <div>
                                            <Link to={ROUTES.PRODUCT_LIST}>{
                                                <button id="shop-now" name="shop-now" type="button" className="shop__now__btn">
                                                    SHOP NOW
                                                </button>
                                            }</Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="border">
                                </div>
                            </div>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide">
                            <div>
                                <img className="man-stand-img" src={menstand} alt="men-stand">
                                </img>
                            </div>
                        </div>
                    </div>

                    {/* Phone View */}
                    <div className='banner-phone'>
                        <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">
                            <div className='aem-GridColumn aem-GridColumn--phone--12'>
                                <div>
                                    <img className="man-stand-img" src={menstand} alt="men-stand">
                                    </img>
                                </div>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--phone--12'>
                                <div className="home__title__1__div">
                                    <div className="home__title__1">
                                        <label htmlFor="home-titlr-1">
                                            Take off in the new Signature Legging
                                        </label>
                                    </div>
                                    <div className="home__subtitle__1">
                                        <label htmlFor="home-subtitle-1">
                                            Lorem Ipsum Dolor Tempor
                                        </label>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                    </div>
                                    <div className="aem-Grid aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--phone--12">
                                            <div>
                                                <Link to={ROUTES.PRODUCT_LIST}>{
                                                    <button  type="button" className="shop__now__btn">
                                                        SHOP NOW
                                                    </button>
                                                }</Link>

                                            </div>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--phone--12">
                                            <div>
                                                <Link to={ROUTES.PRODUCT_LIST}>{
                                                    <button  type="button" className="shop__cont__btn">
                                                        SHOP COLLECTION
                                                    </button>
                                                }</Link>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="border border-home">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* {phone view end} */}

                </div>

                <div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--7   aem-GridColumn--phone--12 ">
                            <div>
                                <img className="man-sky-img" src={mensky} alt="men-looking-sky">
                                </img>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
                            <div className="block__details">
                                <div className="home__title__2__div">
                                    <div className="home__title__2">
                                        <label htmlFor="home-title-2" >Conquer your <br></br>next adventure</label>
                                    </div>
                                    <div>
                                        <label htmlFor="home-subtitle-2">
                                            Lorem Ipsum Dolor Tempor
                                        </label>
                                    </div>
                                    <div>
                                        <button type="button"  name="shop-device" className="shop__cont__service__btn">
                                            SHOP DEVICES
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="map__in__div">
                                        <img className="map__in__img " src={mappin} alt="mappin">
                                        </img>
                                        <div className="border__div">
                                            <div className="border">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

