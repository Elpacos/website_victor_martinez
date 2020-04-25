import * as React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Frame } from 'framer';
import { shuffle } from "lodash";
import './FloatingCards.scss';

const spring = {
    type: "spring",
    damping: 30,
    stiffness: 16
};
const initialColors = ["1", "2", "3", "4"];

export const FloatingCards = () => {
    const [colors, setColors] = useState(initialColors);
    const [first, setFirst] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [dark, setDark] = useState(true);
    const [arrow, setArrow] = useState(false);
    window.onscroll = () => {

        if (((window.pageYOffset < 1900) && (window.pageYOffset > 1000)) && (!scrolled)) {

            setScrolled(true);
            setTimeout(() => setColors(shuffle(colors)), 200)
        }
        if (window.pageYOffset < 650){
            setTimeout(() => setArrow(true), 300);
        }else{
            setTimeout(() => setArrow(false), 300);
        }

    }

    useEffect(() => {


        if (first == true) {
            setDark(false);
            setFirst(false);
            setTimeout(() => setArrow(true), 300);

        }

        if ((first == false) && ((window.pageYOffset < 1900) && (window.pageYOffset > 1000))) {

            setTimeout(() => { if (((window.pageYOffset < 1900) && (window.pageYOffset > 1000))) { setColors(shuffle(colors)) } else { setScrolled(false) } }, 5000);
        }
    }, [colors]);

    function navigationFun(where: string){
        document.getElementById(where)?.scrollIntoView(true);
    }


    return (
        <div className="floatcards-wrapper">
            <ul>
                {colors.map(background => (
                    <motion.div
                        key={background}
                        layoutTransition={spring}

                    >
                        <div className={"images image" + (background)} >

                        </div>
                    </motion.div>
                ))}

            </ul>
            <div className={"float-cards-text" + (dark ? "-active" : "")}>
                <Frame
                    size={"100%"}
                    background={""}
                    style={{
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: 26,
                        color: "#EEF8FF",
                    }}
                    initial={{ y: 26 * 1.2 }}
                    animate={{ y: 0 }}
                >
                    Developer
                </Frame>
                {arrow && <div className="arrows-content" onClick={()=> navigationFun("contenttop")}>
                <div className="arrow arrow-first"></div>
                <div className="arrow arrow-second"></div>
                </div>}
            </div>
        </div>
    )
};