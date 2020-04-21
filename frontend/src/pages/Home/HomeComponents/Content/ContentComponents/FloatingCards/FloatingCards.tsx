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
    const [dark, setDark] = useState(true);
    window.onscroll= () =>{
        if((window.pageYOffset<100)&&scrolled){

            setScrolled(false);
            setTimeout(() => setColors(shuffle(colors)), 200)
        }
        if((window.pageYOffset<100)&&dark){
            setDark(false)
        }
        if(window.pageYOffset>=100){
            setDark(true);
        }
    }

    useEffect(() => {
        console.log(scrolled)

        if (first == true) {
            setDark(false)
            setTimeout(() => setColors(shuffle(colors)), 500);
            setFirst(false)

        }

        if ((first == false )&&(window.pageYOffset<100)) {

            setTimeout(() => {if(window.pageYOffset<100){setColors(shuffle(colors))}else{setScrolled(true)}}, 4000);
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
                        <div className={"images image" + (background)} >

                        </div>
                    </motion.div>
                ))}

            </ul>
            <div className={"float-cards-text" + (dark? "-active": "")}>
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
            </div>
        </div>
    )
};