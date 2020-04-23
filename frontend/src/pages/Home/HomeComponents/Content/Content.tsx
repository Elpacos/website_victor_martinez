import React from 'react';
import { FloatingCards } from './ContentComponents/FloatingCards/FloatingCards';
import './Content.scss';
import { motion, useAnimation } from 'framer-motion';


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
                <div className="content-span content-mid-top">
                    <div className="content-span-background">
                        <div className="content-span-text">

                            <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={itemsvertical}
                                transition={{ ease: "easeOut" }}
                                className="content-divider-vertical" />
                            <div className="content-text">
                                <div className="content-divider-text">
                                    Un tio sencillo fullstack css, <br />
                                atrevido, racional terapeutico <br />

                                </div>
                                <div className="content-divider-horizontal" />
                            </div>

                    </div>
                    <div className="content-span-gallery">


                    </div>
                    </div>
                </div>
                <div className="content-span content-mid-mid">
                    <div className="content-mid-top">

                    </div>
                    <div className="content-mid-bottom">

                    </div>


                </div>
                <div className=" content-span content-divider-bottom">
                    <FloatingCards />
                </div>
            </div>

        </div>
    );
}