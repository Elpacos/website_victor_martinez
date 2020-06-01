import React from 'react';
import { FloatingCards } from './ContentComponents/FloatingCards/FloatingCards';
import './Content.scss';
import { motion, useAnimation } from 'framer-motion';
import Advantages from './ContentComponents/Advantages/Advantages';


export default function Content() {
    const controls = useAnimation();
    const itemsvertical = {
        visible: { opacity: 0.8, y: 0 },
        hidden: { opacity: 0, y: -250 },
    }

    window.addEventListener("scroll", () => {

        if (window.pageYOffset > 500) {
            controls.start("visible");
        }
    });
    return (
        <div className="content-wrapper">
            <div className="content-top">


            </div>
            <div className="content-mid">
                <div className="content-span content-mid-mid" id="contenttop">
                    <Advantages />
                </div>
                <div className="content-span content-mid-top">
                    <div className="content-span-background">
                        <div className="content-span-text">
                            <div className="content-text">
                                <div className="content-divider-text">
                                    <div className="content-divider-title">
                                        Be involved,
                                    </div>
                                    <div className="content-divider-subtitle">
                                        Sometimes it's difficult to find one phrase that represents you,
                                        <br/>
                                        Don't take it as easy as you could.
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="content-span-gallery">


                        </div>
                    </div>
                </div>


                <div className=" content-span content-bottom">
                    <div className="content-bottom-title">
                        MAIN PROJECTS
                        <div className="stack"> STACK</div>
                    </div>
                    <FloatingCards />
                </div>
            </div>

        </div>
    );
}