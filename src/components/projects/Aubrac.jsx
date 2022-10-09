import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../../style.css';
import {useEffect} from "react";
import macAubrac from '../../assets/pictures/macAubrac.png'
const Aubrac = () => {
    useEffect(() => {
        
    })
    return (
        <section className="Aubrac">
           <div className="Aubrac__display">
                <div className="macAubrac">
                    <img src={macAubrac} alt="" />
                    <div className="circle"></div>
                </div>
                <div className='Aubrac__display__text'>
                    <h1>Aubrac</h1>
                    <div className='separator'></div>
                    <h2>Design des maquettes</h2>
                    <h2>Intégration <br/>Avec React</h2>
                    <h2>Debrief client</h2>
                    
                </div>
           </div>
        </section>
    )
}
export default Aubrac
