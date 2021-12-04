import { Fragment, useEffect } from "react";
import Iframe from "react-iframe";
import HeaderComponent from "./Header";
import MainComponent from './Main'
const HomeComponent = (props) => {
    return (
        <main>
            {/* <HeaderComponent />
            <MainComponent /> */}
            <Iframe
                url="https://around.madrasthemes.com/demo-product-software/"
                height="1000px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
        </main>
    );
};

export default HomeComponent;
