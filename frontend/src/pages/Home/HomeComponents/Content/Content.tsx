import React from 'react';
import { FloatingCards } from './ContentComponents/FloatingCards/FloatingCards';
import './Content.scss';

export default function Content(){
    return(
        <div className="content-wrapper">
            <div className="content-top">
                <FloatingCards />
            </div>
            <div className="content-mid">

            </div>

        </div>
    );
}