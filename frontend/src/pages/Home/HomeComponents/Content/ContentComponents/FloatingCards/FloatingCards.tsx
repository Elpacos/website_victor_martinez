import * as React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Frame } from 'framer';
import { shuffle } from "lodash";
import './FloatingCards.scss';
import Button from '../../../../../../Components/Button/Button';


const spring = {
    type: "spring",
    damping: 30,
    stiffness: 16
};
const links = ["https://wirend.net", "GitHub", "Link"];
const buttons = ["Wirend site", "GitHub", "Link"];
const initialColors = [0, 1, 2];
const titles = ["Wirend", "Facial recognition model", "Crypto predictor"]
const text = ["Entrepreneur project, platform to conect businesses with influencers, based on trained algorithms, displaying a user-friendly interface.", "My Production and music works, including beats and collabs.", "Crypto price RNN predictor", "Facial recognition model"]
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
        if (window.pageYOffset < 650) {
            setTimeout(() => setArrow(true), 300);
        } else {
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

            setTimeout(() => { if (((window.pageYOffset < 1900) && (window.pageYOffset > 1000))) { setColors(shuffle(colors)) } else { setScrolled(false) } }, 10000);
        }
    }, [colors]);

    function navigationFun(where: string) {
        document.getElementById(where)?.scrollIntoView(true);
    }


    return (
        <div className="floatcards-wrapper">
            <div className="cards-wrapper">
                <div className="left-card">
                    <div className="image-prod">
                        <div className="hover">
                            <div className="hover-title">
                                lol
                            </div>
                            <div className="hover-text">
                                lol
                            </div>
                            <a target="_blank">
                                <Button text="See more"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cards-wrapper-inside">
                {colors.map((background) => (
                    <motion.div
                        key={background}
                        layoutTransition={spring}
                        className="floated-card"
                    >
                        <div className={"images image" + (background)} >
                            <div className="hover">
                                <div className="hover-title">
                                    {titles[background]}
                                </div>
                                <div className="hover-text">
                                    {text[background]}
                                </div>
                                <a href={links[background]} target="_blank">
                                    <Button text={buttons[background]} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            </div>


            <div className={"float-cards-text" + (dark ? "-active" : "")}>
                <Frame
                    size={"100%"}
                    background={""}
                    style={{
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: 30,
                        color: "#000",

                    }}
                    initial={{ y: 26 * 1.2 }}
                    animate={{ y: 0 }}
                >
                    Developer
                </Frame>
                {arrow && <div className="arrows-content" onClick={() => navigationFun("contenttop")}>
                    <div className="arrow arrow-first"></div>
                    <div className="arrow arrow-second"></div>
                </div>}
            </div>
        </div>
    )
};