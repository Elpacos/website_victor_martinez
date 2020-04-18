import * as React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import './FloatingCards.scss';

const spring = {
    type: "spring",
    damping: 7,
    stiffness: 16
};
const initialColors = ["1", "2", "3", "4"];

export const FloatingCards = () => {
    const [colors, setColors] = useState(initialColors);
    const [first, setFirst] = useState(true)


    useEffect(() => {console.log(first)
        if (first == true){
            setTimeout(() => setColors(shuffle(colors)), 200);
            setFirst(false)

        }
        if (first == false){


        console.log("secondary")
        setTimeout(() => setColors(shuffle(colors)), 4000);
        }
    }, [colors]);



    return (
        <div className="floatcards-wrapper">
            <ul>
                {colors.map(background =>(
                    <motion.div
                    key={background}
                    layoutTransition={spring}

                >
                <div className={"images image" + (background) }/>
                </motion.div>
                ))}




            </ul>
        </div>
    )
};