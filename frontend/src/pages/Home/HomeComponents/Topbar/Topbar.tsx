import React, { useEffect } from 'react';
import './Topbar.scss';
import { motion } from 'framer-motion';
export default function Topbar() {
    const [active, setActive] = React.useState(false);
    window.addEventListener("scroll", () => {
        if ((window.pageYOffset > 100)) {

            setActive(true)
        } else {

            setActive(false)
        }
    }
    )


    return (
        <div className={"topbar-wrapper" + (active? "-activated": "")}>

                <div className="topbar-icon">
                    VN
                </div>


        </div>
    );
}