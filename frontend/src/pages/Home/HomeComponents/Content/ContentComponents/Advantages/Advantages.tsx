import * as React from 'react';
import './Advantages.scss';
import Advantage from './AdvantagesComponent/Advantage';


export default function Advantages(props: any) {


    return (
        <div className="advantages-wrapper" id="advantages">
            <div className="advantages-list">
                    <div className="advantages-list-left">
                        <Advantage  title={"ONE"} subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsam quaerat magni reprehenderit architecto error, minus inventore. Architecto minus."} />
                    </div>
            </div>
            <div className="advantages-list">
                    <div className="advantages-list-left">
                        <Advantage  title={"TWO"} subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsam quaerat magni reprehenderit architecto error, minus inventore. Architecto minus."} />
                    </div>
            </div>
            <div className="advantages-list">
                    <div className="advantages-list-left">
                        <Advantage  title={"ONE"} subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsam quaerat magni reprehenderit architecto error, minus inventore. Architecto minus."} />
                    </div>
            </div>
        </div>
    )
}