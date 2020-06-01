import * as React from 'react';
import './Advantage.scss';

export default function Advantage(props:any){
    return(
        <div className="advantage-wrapper">
            <div className="advantage-icon">
                <img src={props.image}/>
            </div>
            <div className="advantage-title">
                {props.title}
            </div>
            <div className="advantage-subtitle">
                {props.subtitle}
            </div>
        </div>
    )
}