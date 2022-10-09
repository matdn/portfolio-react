import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../../style.css';
import {useEffect} from "react";
import Parano from '../../assets/pictures/macParano.png'
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
                    <h2>charte graphique</h2>
                    <h2>design des maquettes</h2>
                    
                </div>
                <div className="macParano">
                    <img src={Parano} alt="" />
                    <div id="circle1" className="circle"></div>
                </div>
           </div>
        </section>
    )
}
export default Paranoid
