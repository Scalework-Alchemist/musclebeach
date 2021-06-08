import { h } from "preact";
import style from "./style.scss";


const Splash = ({ CTA }) => {
    return (

        <div class="full-page-loader">
            <img
                width="200"
                height="81"
                src="https://resources.qlinkwireless.com/images/logo.jpg"
                alt="Qlink Wireless logo"
            />
        </div>
    )
}

export default Splash;