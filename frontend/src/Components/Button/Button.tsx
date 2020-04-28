import React from 'react';

import './Button.scss';
import { link } from 'fs';

export default function WirendButton(props: any){
    return(
        <button onClick={props.onClick} className="common-button-wrapper">
            {props.text}
        </button>
    );
}