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
    const [lastName, setLastName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [streetAddress2, setStreetAddress2] = useState("");
    const [city, setCity] = useState("");
    const [stateArea, setStateArea] = useState("Maharashtra");
    const [zip, setZip] = useState("");

    const emailRestore = window.localStorage.getItem('email');
    const phoneRestore = window.localStorage.getItem('phone');
    const countryRestore = window.localStorage.getItem('country');
    const firstNameRestore = window.localStorage.getItem('firstname');
    const lastNameRestore = window.localStorage.getItem('lastname');
    const zipRestore = window.localStorage.getItem('zip');
    const streetAddress2Restore = window.localStorage.getItem('streetaddress2');
    const streetaAddressRestore = window.localStorage.getItem('streetaddress');
    const stateRestore = window.localStorage.getItem('state');
    const cityRestore = window.localStorage.getItem('city');

    const handleContShippingMethod = () => {
        if ((city !== "" && country !== "" && email !== "" && phone !== "" &&
            firstName !== "" && lastName !== "" && zip !== "" && stateArea !== "" && streetAddress !== "") ||
            cityRestore !== "" && cityRestore !== "" && emailRestore !== "" && phoneRestore !== "" && firstNameRestore !== "" &&
            lastNameRestore !== "" && zipRestore !== "" && stateRestore !== "" && streetaAddressRestore !== "") {
            setshowshippingInfo(false);
            setshowshippingInfoEdit(true);
            setshowshippingInfoLabel(false);
            props.priceSummaryDiv(showshippingInfo);
        } else {
            alert("enter all the fields")
        }
    }

    const handleContShippingMethodEdit = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfoEdit(false)
        setshowshippingInfo(true)
        props.priceSummaryDiv(showshippingInfo);

    }

    const handleShippingInfoLabel = () => {
        setshowshippingInfoLabel(false)
        setshowshippingInfo(true)
        setshowshippingInfoEdit(false)

        props.priceSummaryDiv(showshippingInfo);
    }


    const handleEmailChange = (e: any) => {
        window.localStorage.setItem('email', e.target.value);
        setEmail(e.target.value);
    }

    const handlePhoneNoChange = (e: any) => {
        window.localStorage.setItem('phone', e.target.value);
        setPhone(e.target.value);
    }

    const handleCountryChange = (e: any) => {
        window.localStorage.setItem('country', e.target.value);
        setCountry(e.target.value);
    }

    const handleCityChange = (e: any) => {
        window.localStorage.setItem('city', e.target.value);
        setCity(e.target.value);
    }

    const handleFirstNameChange = (e: any) => {
        window.localStorage.setItem('firstname', e.target.value);
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e: any) => {
        window.localStorage.setItem('lastname', e.target.value);
        setLastName(e.target.value);
    }

    const handleStreetAddressChange = (e: any) => {
        window.localStorage.setItem('streetaddress', e.target.value);
        setStreetAddress(e.target.value);
    }

    const handleStreetAddressOptionalChange = (e: any) => {
        window.localStorage.setItem('streetaddress2', e.target.value);
        setStreetAddress2(e.target.value);
    }

    const handleStateChange = (e: any) => {
        window.localStorage.setItem('state', e.target.value);
        setStateArea(e.target.value);
    }

    const handleZipChange = (e: any) => {
        window.localStorage.setItem('zip', e.target.value);
        setZip(e.target.value);
    }

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
                                            value={email ? email : (emailRestore && emailRestore ? emailRestore : email)}
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
                                            value={phone ? phone : (phoneRestore && phoneRestore ? phoneRestore : phone)}
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
                                            className="input__box input__box__select"
                                            name="country"
                                            value={country ? country : (countryRestore && countryRestore ? countryRestore : country)}
                                            placeholder="United States"
                                            onChange={handleCountryChange}
                                        >
                                            {COUNTRY.map(function (option: any) {
                                                return (
                                                    <option className="options" id={option.id} key={option.id} value={option.value}>
                                                        <span className="options">{option.label} </span>
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
                                            value={firstName ? firstName : (firstNameRestore && firstNameRestore ? firstNameRestore : firstName)}
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
                                            autoComplete="off"
                                            className="input__box"
                                            type="text"
                                            value={lastName ? lastName : (lastNameRestore && lastNameRestore ? lastNameRestore : lastName)}
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
                                            autoComplete="off"
                                            className="input__box"
                                            type="text"
                                            value={streetAddress ? streetAddress : (streetaAddressRestore && streetaAddressRestore ? streetaAddressRestore : streetAddress)}
                                            name="street-address"
                                            onChange={handleStreetAddressChange}
                                        />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6   aem-GridColumn--phone--12 ">
                                    <div className="label__name__div">
                                        <label htmlFor="street-address-2" >Street Address2
                                        </label>
                                        <label htmlFor="optinal" className="optional__field__span" >Optional
                                        </label>
                                    </div>
                                    <div className="input__box__div">
                                        <input
                                            id="street-address-2"
                                            className="input__box"
                                            type="text"
                                            value={streetAddress2 ? streetAddress2 : (streetAddress2Restore && streetAddress2Restore ? streetAddress2Restore : streetAddress2)}
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
                                            value={city ? city : (cityRestore && cityRestore ? cityRestore : city)}
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
                                            className="input__box input__box__select"
                                            name="state"
                                            placeholder="United States"
                                            value={stateArea ? stateArea : (stateRestore && stateRestore ? stateRestore : stateArea)}
                                            onChange={handleStateChange}
                                        >
                                            {STATE.map(function (option: any) {
                                                return (
                                                    <option className="options" id={option.id} key={option.id} value={option.value}>
                                                        <span className="options" >{option.label} </span>
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
                                            value={zip ? zip : (zipRestore && zipRestore ? zipRestore : zip)}
                                            placeholder="91001"
                                            onChange={handleZipChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--12">
                                    <div>
                                        <button
                                            type='button'
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
                                        {email ? email : (emailRestore && emailRestore ? emailRestore : email)}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        +{phone ? phone : (phoneRestore && phoneRestore ? phoneRestore : phone)}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--5   aem-GridColumn--phone--12 ">
                            <div className="shipping__method__summary__label__div">
                                <div>
                                    <label>
                                        {firstName ? firstName : (firstNameRestore && firstNameRestore ? firstNameRestore : firstName)}
                                        {' '}
                                        {lastName ? lastName : (lastNameRestore && lastNameRestore ? lastNameRestore : lastName)}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        {city ? city : (cityRestore && cityRestore ? cityRestore : city)}{' '}
                                        {stateArea ? stateArea : (stateRestore && stateRestore ? stateRestore : stateArea)}{' '}
                                        {zip ? zip : (zipRestore && zipRestore ? zipRestore : zip)}{' '}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        {country ? country : (countryRestore && countryRestore ? countryRestore : country)}
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

