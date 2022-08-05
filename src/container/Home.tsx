import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomePage from "../component/content/HomePage";

//home
function Home() {
    //redux state
    const setMenuBarStatus = useSelector((state: any) => state.getProductList.setMenuBarStatus);

    useEffect(() => {
        //maintain state on refresh   
        // window.localStorage.setItem('email', ' ');
        // window.localStorage.setItem('phone', ' ');
        // window.localStorage.setItem('country', ' ');
        // window.localStorage.setItem('firstname', ' ');
        // window.localStorage.setItem('lastname', ' ');
        // window.localStorage.setItem('zip', ' ');
        // window.localStorage.setItem('streetaddress2', ' ');
        // window.localStorage.setItem('streetaddress', ' ');
        // window.localStorage.setItem('state', ' ');
        // window.localStorage.setItem('city', "");
        // window.localStorage.setItem('cardnumber', "");
        // window.localStorage.setItem('cardname', "");
        // window.localStorage.setItem('cvvnumber', "");
        // window.localStorage.setItem('expirationdate', "");
        // window.localStorage.setItem('cartValue', "");

        window.localStorage.setItem('paymenttype', "");
    })


    return (
        <div className="aem-Grid aem-Grid--12   aem-GridColumn--phone--12 ">
            <div className={setMenuBarStatus ? 'display-list' : ''}   >
                <HomePage />
            </div>
        </div>
    );
}

export default Home;

