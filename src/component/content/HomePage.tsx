import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import mengroupcrop from "../../assests/images/mengroupcrop.png";
import mensky from "../../assests/images/mensky.png";
import menstand from "../../assests/images/menstand.png";
import mappin from "../../assests/images/mappin.svg";
import chevronleft from "../../assests/images/chevronleft.svg"
import { Button } from "@mui/material";
import { CATEGORY } from "../../constant/common";
import { history } from "../../store/config";

//home
function HomePage() {

    return (
        <div className="homepage-container">
            <div className="home-page-sub-container-1">
                <div className="aem-Grid aem-Grid--12">

                    <div className="aem-GridColumn aem-GridColumn--default--1   aem-GridColumn--phone--12 ">
                        <div>
                            <img src={chevronleft} alt="chevronleft">
                            </img>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">

                        <div>
                            <label>
                                Shop the new Signature Collection
                            </label>
                        </div>
                        <div>
                            <label>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ar dolore magna aliqua. Labortis mattis aliquam faucibus purus
                            </label>
                        </div>
                        <div>
                            <Link to={ROUTES.PRODUCT_LIST}>{
                                <button type="submit" className="btn btn-primary mt-3">
                                    SHOP NOW
                                </button>
                            }</Link>

                        </div>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                        <div>
                            <img className="man-grp-img" src={mengroupcrop} alt='men-group'>
                            </img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-page-sub-container-2">
                <div className="home-page-margin-botton">
                    <div className="aem-Grid aem-Grid--12">
                        {
                            CATEGORY.map((key) => {
                                return (
                                    <div className="aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12">
                                        <Link to={ROUTES.PRODUCT_LIST}>{

                                            <img className="category-img" id={key.id} src={key.img} alt='category-list'>
                                            </img>
                                        }</Link>
                                        <div>
                                            <label>
                                                Shop Women
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                Lorem ipsum dolor sit amet
                                            </label>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="home-page-margin-botton">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>
                                    Take off in the new Signature Legging
                                </label>
                            </div>
                            <div>
                                <label>
                                    Lorem Ipsum Dolor Tempor
                                </label>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                            </div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div>
                                        <Link to={ROUTES.PRODUCT_LIST}>{
                                            <button type="submit" className="btn btn-primary mt-3">
                                                SHOP NOW
                                            </button>
                                        }</Link>

                                    </div>

                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div>
                                        <Link to={ROUTES.PRODUCT_LIST}>{
                                            <button type="submit" className="btn btn-primary mt-3">
                                                SHOP NOW
                                            </button>
                                        }</Link>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <img className="man-stand-img" src={menstand} alt="men-stand">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <img className="man-sky-img" src={mensky} alt="men-looking-sky">
                                </img>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                            <div>
                                <label>Conquer your next adventure</label>
                            </div>
                            <div>
                                <label>
                                    Lorem Ipsum Dolor Tempor
                                </label>
                            </div>
                            <div>
                                <Button>
                                    shop now!
                                </Button>
                            </div>
                            <div>
                                <img src={mappin} alt="mappin">
                                </img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;

