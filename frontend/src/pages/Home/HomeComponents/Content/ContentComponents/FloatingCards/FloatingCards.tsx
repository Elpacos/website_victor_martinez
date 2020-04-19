import * as React from 'react';
import { useState, useEffect } from "react";
import { motion} from "framer-motion";
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
    window.onscroll= () =>{
        if((window.pageYOffset<200)&&scrolled){
            setScrolled(false);
            setTimeout(() => setColors(shuffle(colors)), 200)
        }
    }

    useEffect(() => {
        if (first == true) {
            setTimeout(() => setColors(shuffle(colors)), 200);
            setFirst(false)
        }
        if ((first == false )&&(window.pageYOffset<200)) {
            setTimeout(() => {if(window.pageYOffset<200){setColors(shuffle(colors))}else{setScrolled(true)}}, 4000);
        }
    }, [colors]);



    return (
        <div className="floatcards-wrapper">
            <ul>
                {colors.map(background => (
                    <motion.div
                        key={background}
                        layoutTransition={spring}

                    >
                        <div className={"images image" + (background)} />
                    </motion.div>
                ))}

            </ul>
            <div className="float-cards-text">
                <Frame
                    size={"100%"}
                    background={""}
                    style={{
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: 26,
                        color: "#FFF",
                    }}
                    initial={{ y: 26 * 1.2 }}
                    animate={{ y: 0 }}
                >
                    Developer
                </Frame>
            </div>
        </div>
    )
};