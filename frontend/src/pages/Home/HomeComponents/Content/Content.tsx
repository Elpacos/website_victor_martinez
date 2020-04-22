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
                <FloatingCards />

            </div>
            <div className="content-mid">
                <div className="content-span content-mid-top">
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
                            <div

                                className="content-divider-horizontal" />
                        </div>

                    </div>
                    <div className="content-span-gallery">
                        <div className="content-span-photo">

                        </div>

                    </div>
                </div>
                <div className="content-span content-mid-mid">
                    <div className="content-mid-left">

                    </div>
                    <div className="content-divider-split"/>
                    <div className="content-mid-right">

                    </div>
                </div>
            </div>

        </div>
    );
}