import React from 'react';
import './Home.scss';
import Topbar from './HomeComponents/Topbar/Topbar';
import Content from './HomeComponents/Content/Content';

export default function Home() {
    return (
        <div className="home-wrapper">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="home-topbar">
                <Topbar />
            </div>
            <div className="home-content">
                <Content />
            </div>
        </div>
    );
}