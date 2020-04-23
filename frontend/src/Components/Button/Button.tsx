import React from 'react';

import './Button.scss';

export default function WirendButton(props: any){
    return(
        <button onClick={props.onClick} className="common-button-wrapper">
            {props.text}
        </button>
    );
}