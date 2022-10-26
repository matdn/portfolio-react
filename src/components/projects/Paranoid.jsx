import React from 'react'
import '../../style.css';
import {useEffect} from "react";
import Parano from '../../assets/pictures/macParano.png'
import ParanoR from '../../assets/pictures/pbresponsive.png'
const Paranoid = () => {
    useEffect(() => {
        
    })
    return (
        <section className="Paranoid">
           <div className="Paranoid__display">
                <div className='Paranoid__display__text'>
                    <h1>paranoid broccoli</h1>
                    <div className='separator'></div>
                    <h2>conception de l'univers</h2>
                    <h2><span>charte graphique</span></h2>
                    <h2>design des maquettes</h2>
                    
                </div>
                <div className="macParano">
                    <img className="pb" src={Parano} alt="" />
                    <img className="pbr" src={ParanoR} alt="" />
                    <div id="circle1" className="circle"></div>
                </div>
           </div>
        </section>
    )
}
export default Paranoid
