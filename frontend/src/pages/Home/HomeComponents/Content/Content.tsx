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
                <div className="content-span content-mid-top" id="contenttop">
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
                                   Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Voluptates impedit ut amet


                                </div>
                                <div className="content-divider-horizontal" />
                            </div>

                    </div>
                    <div className="content-span-gallery">


                    </div>
                    </div>
                </div>
                <div className="content-span content-mid-mid">
                    <Advantages />
                </div>
                <div className=" content-span content-bottom">
                    <FloatingCards />
                </div>
            </div>

        </div>
    );
}