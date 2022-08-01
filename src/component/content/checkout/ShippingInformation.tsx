import { useState } from "react";
import edit1 from "../../../assests/images/edit1.svg";
import { COUNTRY, STATE } from "../../../constant/common";

// shipping info selection
function ShippingInformation(props: any) {
    //local state
    const [showshippingInfo, setshowshippingInfo] = useState(false);
    const [showshippingInfoEdit, setshowshippingInfoEdit] = useState(false);
    const [showshippingInfoLabel, setshowshippingInfoLabel] = useState(true);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("India");
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("Roy");
    const [streetAddress, setStreetAddress] = useState("109-B Wapello Street");
    const [streetAddress2, setStreetAddress2] = useState("");
    const [city, setCity] = useState("");
    const [stateArea, setStateArea] = useState("Maharashtra");
    const [zip, setZip] = useState("92345");
  
    const shippingInfo = window.localStorage.getItem('shippingInfo');
    let shippingInfoList = shippingInfo ? JSON.parse(shippingInfo) : {};


    const handleContShippingMethod = () => {
        const formObj = {
            "city": city,
            "country": country,
            "email": email,
            "phone": phone,
            "firstName": firstName,
            "lastName": lastName,
            "zip": zip,
            "state": stateArea,
            "streetAddress": streetAddress,
            "strretAddress2": streetAddress2
        }
        window.localStorage.setItem('shippingInfo', JSON.stringify(formObj));

        if (city !== "" && country !== "" && email !== "" && phone !== "" &&
            firstName !== "" && lastName !== "" && zip !== "" && stateArea !== "" && streetAddress !== "") {
            setshowshippingInfo(false);
            setshowshippingInfoEdit(true);
            setshowshippingInfoLabel(false);
        }

    }

    const handleContShippingMethodEdit = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfoEdit(false)
        setshowshippingInfo(true)
    }

    const handleShippingInfoLabel = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfo(true)
        setshowshippingInfoEdit(false)
    }


    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePhoneNoChange = (e: any) => {
        setPhone(e.target.value);
    }

    const handleCountryChange = (e: any) => {
        setCountry(e.target.value);
    }

    const handleCityChange = (e: any) => {
        setCity(e.target.value);
    }

    const handleFirstNameChange = (e: any) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e: any) => {
        setlastName(e.taget.value);
    }

    const handleStreetAddressChange = (e: any) => {
        setStreetAddress(e.taget.value)
    }

    const handleStreetAddressOptionalChange = (e: any) => {
        setStreetAddress2(e.taget.value)
    }

    const handleStateChange = (e: any) => {
        setStateArea(e.taget.value)
    }

    const handleZipChange = (e: any) => {
        setZip(e.taget.value)
    }

    console.log("shippingInfoList", shippingInfoList)
    //retun component
    return (
        <div className="shipping__info__container">
            <div onClick={handleShippingInfoLabel} className={showshippingInfoLabel ? "checkout__info__show " : "checkout__info__hide"}>
                <div className='checkout__methods__div' >
                    <label >
                        1. Shipping Information
                    </label>
                </div>
            </div>

            <div className={showshippingInfoLabel ? "checkout__info__hide" : "checkout__info__show"}>
                <div className="guest__checkout__div">
                    <label>
                        Guest Checkout
                    </label>
                </div>
            </div>
            <div>
                <div className={showshippingInfo ? "checkout__info__show " : "checkout__info__hide"}>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                            <div className="contract__information__div">
                                <label>Contact information</label>
                            </div>
                            <div className="contract__information_sub_title">
                                <label>
                                    We’ll use these details to keep you informed on your delivery.
                                </label>
                            </div>
                        </div>
                        <form>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="email">
                                            Email
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            id="email"
                                            className="input__box"
                                            type="text"
                                            name="email"
                                            value={email ? email : shippingInfoList.email}
                                            placeholder="abc@xyz.com"
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="phone-number">
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            id="phone-number"
                                            className="input__box"
                                            type="text"
                                            name="phone-number"
                                            value={phone ? phone : shippingInfoList.phone}
                                            placeholder="(222) 222-2222"
                                            onChange={handlePhoneNoChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="checkout__methods__div__toggel">
                                        <label>1. Shipping Information</label>
                                    </div>

                                    <div className="label__name__div">
                                        <label htmlFor="country">Country
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <select required
                                            id="country"
                                            className="input__box"
                                            name="country"
                                            value={country ? country : shippingInfoList.country}
                                            placeholder="United States"
                                            onChange={handleCountryChange}
                                        >
                                            {COUNTRY.map(function (option: any) {
                                                return (
                                                    <option id={option.id} key={option.id} value={option.value}>
                                                        <span>{option.label} </span>
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="first-name" >First Name
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            id="first-name"
                                            autoComplete="off"
                                            className="input__box"
                                            type="text"
                                            value={firstName ? firstName : shippingInfoList.firstName}
                                            name="first-name"
                                            onChange={handleFirstNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="last-name" >Last Name
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            id="last-name"
                                            className="input__box"
                                            type="text"
                                            value={lastName ? lastName : shippingInfoList.lastName}
                                            name="last-name"
                                            onChange={handleLastNameChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="street-address" >Street Address
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            id="street-address"
                                            className="input__box"
                                            type="text"
                                            // value={streetAddress ? streetAddress : shippingInfoList.streetAddress}
                                            name="street-address"
                                            onChange={handleStreetAddressChange}
                                        />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="street-address-2" >Street Address2
                                        </label>
                                        <label htmlFor="optinal" >Optional
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            id="street-address-2"
                                            className="input__box"
                                            type="text"
                                            value={streetAddress2 ? streetAddress2 : shippingInfoList.streetAddress2}
                                            name="street-address-2"
                                            onChange={handleStreetAddressOptionalChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="city">City
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            required
                                            id="city"
                                            className="input__box"
                                            type="text"
                                            name="city"
                                            value={city ? city : shippingInfoList.city}
                                            placeholder="Altadena"
                                            onChange={handleCityChange} />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="state">State
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <select required
                                            id="state"
                                            className="input__box"
                                            name="state"
                                            placeholder="United States"
                                            value={stateArea ? stateArea : shippingInfoList.stateArea}
                                            onChange={handleStateChange}
                                        >
                                            {STATE.map(function (option: any) {
                                                return (
                                                    <option id={option.id} key={option.id} value={option.value}>
                                                        <span>{option.label} </span>
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="zip">Zip
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            id="zip"
                                            className="input__box"
                                            type="text"
                                            name="zip"
                                            // value={zip ? zip : shippingInfoList.zip}
                                            placeholder="91001"
                                            onChange={handleZipChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--12   aem-GridColumn--phone--12 ">
                                    <div>
                                        <button
                                            type= 'button'
                                            className="checkout__step1__btn"
                                            onClick={handleContShippingMethod}
                                        >
                                            <span className="btn__span">
                                                CONTINUE TO SHIPPING METHOD
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={showshippingInfoEdit ? "checkout__info__show" : "checkout__info__hide"}>
                <div className="shipping__info__summary__container">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--10   aem-GridColumn--phone--10 ">
                            <div className="shipping__method__summary__div">
                                <label>Shipping Information</label>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2   aem-GridColumn--phone--2 ">
                            <div onClick={handleContShippingMethodEdit}>
                                <div className="shipping__method__summary__div">
                                    <div className="aem-Grid aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--2 ">
                                            <div >
                                                <img className="checkout__edit__icon" src={edit1} alt="edit">
                                                </img>
                                            </div>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--4   aem-GridColumn--phone--2 ">
                                            <div className="checkout__edit__label">
                                                <label>Edit</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
                            <div className="shipping__method__summary__label__div">
                                <div>
                                    <label>
                                        {email ? email : shippingInfoList.email}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        +{phone ? phone : shippingInfoList.phone}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
                            <div className="shipping__method__summary__label__div">
                                <div>
                                    <label>
                                        {firstName ? firstName : shippingInfoList.firstName}{' '}
                                        {lastName ? lastName : shippingInfoList.lastName}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        {city ? city : shippingInfoList.city}{' '}
                                        {stateArea ? stateArea : shippingInfoList.stateArea}{' '}
                                        {zip ? zip : shippingInfoList.zip}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        {country ? country : shippingInfoList.country}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShippingInformation;

