import React from 'react';
import { FloatingCards } from './ContentComponents/FloatingCards/FloatingCards';
import './Content.scss';
import { motion, useAnimation } from 'framer-motion';


export default function Content() {
    const controls = useAnimation();
    const itemsvertical = {
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:-200 },
    }
    const itemshorizontal = {
        visible: { opacity: 1, x:0 },
        hidden: { opacity: 0, x:200 },
    }
    window.addEventListener("scroll", () => {

        if (window.pageYOffset > 650) {
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
                        transition={{ease: "easeOut", duration: 0.7}}
                        className="content-divider-vertical" />
                        <div className="content-text">
                            <div className="content-divider-text">Fullstack Css</div>
                            <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={itemshorizontal}
                            transition={{ease: "easeOut"}}
                            className="content-divider-horizontal" />
                        </div>

                    </div>
                    <div className="content-span-gallery">
                        <div className="content-span-photo">

                        </div>

                    </div>
                </div>
                <div className="content-span content-mid-mid">

                </div>
            </div>

        </div>
    );
}