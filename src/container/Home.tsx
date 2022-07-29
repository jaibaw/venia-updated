import { useEffect } from "react";
import HomePage from "../component/content/HomePage";

//home
function Home() {

    useEffect(() => {
        //maintain state on refresh 
        window.localStorage.setItem('cartValue', ' ')
    });

    return (
        <div className="aem-Grid aem-Grid--12   aem-GridColumn--phone--12 ">
            <div>
                <HomePage />
            </div>
        </div>
    );
}

export default Home;

