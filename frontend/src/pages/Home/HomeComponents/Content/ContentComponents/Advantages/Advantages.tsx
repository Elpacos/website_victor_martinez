import * as React from 'react';
import './Advantages.scss';
import image1 from '../../../../../../media/React.svg';
import image2 from '../../../../../../media/python-vector.svg';
import image3 from '../../../../../../media/ableton-logo-vector.svg';
import Advantage from './AdvantagesComponent/Advantage';


export default function Advantages(props: any) {


    return (
        <div className="advantages-wrapper" id="advantages">
            <div className="advantages-list">
                    <div className="advantages-list-left">
                        <Advantage  image={image1} title={"Web developer"} subtitle={"Reactjs"} />
                    </div>
            </div>
            <div className="advantages-list">
                    <div className="">
                        <Advantage image={image2}  title={"Programmer"} subtitle={"Python"} />
                    </div>
            </div>
            <div className="advantages-list">
                    <div className="advantages-list-left">
                        <Advantage image={image3} title={"Producer"} subtitle={"Ableton Live"} />
                    </div>
            </div>
        </div>
    )
}