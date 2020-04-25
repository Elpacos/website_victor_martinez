import * as React from 'react';
import './Advantages.scss';
import Advantage from './AdvantagesComponent/Advantage';


export default function Advantages(props: any) {
    const names = ['EMPRESAS', 'INFLUENCERS', 'ANUNCIOS'];
    const descriptions = ['Negocie con diferentes influencers relacionados con su nicho y mejore sus campañas de anuncios.', 'Desarrolla tu marca personal trabajando con marcas de primera calidad. Ofrécele a tus seguidores productos interesantes y gana dinero con ello.', 'Utilizamos métricas especializadas que relacionan intereses entre empresa e influencer, de esta forma, el producto a promocionar siempre llegará a la audiencia adecuada.'];

    return (
        <div className="advantages-wrapper" id="advantages">
            <div className="advantages-list">
                {names.map((item, i) => {
                    return (
                        <Advantage key={i} title={item} subtitle={descriptions[i]} />
                    )
                })}
            </div>
        </div>
    )
}