import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import womensblock from "../../assests/images/womensblock.jpg";
import manplay from "../../assests/images/manplay.jpg";
import { MenuItem, TextField } from "@mui/material";
import Breadcrum from '../common/Breadcrum';
import { FILTER } from '../../constant/common';
import { action_fetchProductByCategory, action_sortProductPrice } from '../../actions/get-products';
import arrowdown from "../../assests/images/arrowdown.svg";
import arrowup from "../../assests/images/arrowup.svg";
import sliders from "../../assests/images/sliders.svg";

//banner
function Banner() {
    const dispatch = useDispatch();

    //local state
    const [filterValue, setFilterValue] = useState('');

    //redux state
    const productList = useSelector((state: any) => state.getProductList.getProductList);

    //fetch data based on slection of dropdown
    const filterChange = (e: any) => {
        setFilterValue(e.target.value);
        if ((e.target.value === 'desc') || (e.target.value === 'asc')) {
            dispatch(action_sortProductPrice(e.target.value));
        } else {
            dispatch(action_fetchProductByCategory(e.target.value));
        }
    }

    const OnArrowUp = () => {
        dispatch(action_sortProductPrice('asc'));
    }

    const OnArrowDown = () => {
        dispatch(action_sortProductPrice('desc'));
    }

    //return component
    return (
        <div className="banner-container">
            <div className='banner-desktop'>
                <div className="aem-Grid aem-Grid--12">
                    <div className='aem-GridColumn aem-GridColumn--default--5'>
                        <div>
                            <img className="women-block" alt='block' src={womensblock}>
                            </img>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--7'>
                        <div>
                            <img className="man-play" src={manplay} alt='man-play'>
                            </img>

                        </div>
                    </div>
                </div>

            </div>

            <div className='banner-phone'>
                <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">
                    <div className='aem-GridColumn aem-GridColumn--phone--12'>
                        <div>
                            <img className="man-play-phone" src={manplay} alt='man-play'>
                            </img>

                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--phone--12'>
                        <div>
                            <img className="women-block-phone" alt='block' src={womensblock}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrum menus */}
            <div className='banner-sub-container'>
                <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12" >
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div  className="breadcum">
                            <Breadcrum
                                label={filterValue}
                            />
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='filter-sort-div'>
                            <div className="aem-Grid aem-Grid--12  aem-GridColumn--phone--12">
                                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6'>
                                    <div className='filter-sort-sub-container'>
                                        <img className='filter-sort-logo' alt='filter' src={sliders}></img>
                                        <span className='filter-sort-span'>
                                            Filter Results
                                        </span>
                                    </div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6'>
                                    <div className='filter-sort-sub-container'>
                                        <img onClick={OnArrowUp} className='sort-logo' alt='increment' src={arrowup}></img>
                                        <img onClick={OnArrowDown} className='sort-logo' alt='decrement' src={arrowdown}></img>
                                        <span className='filter-sort-span'>
                                            Sort Products
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" >
                        <div className='result-div'>
                            <span className='result-span'> {productList && productList ? productList.length : 0}</span>
                            <span className='result-span'>Results</span>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide" >
                        <div className='filter-div'>
                            <TextField
                                id="outlined-select-filter"
                                select
                                label="Filter"
                                value={filterValue}
                                onChange={filterChange}
                                className="filter-dropdown"
                                size='small'
                            >
                                {FILTER.map(function (option: any) {
                                    return (
                                        <MenuItem id={option.id} key={option.id} value={option.value}>
                                            <span className='filter-dropdown-span'>{option.filterLabel} </span>
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Banner;

