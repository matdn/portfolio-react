import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../../style.css';
import {useEffect} from "react";
import macAxioma from '../../assets/pictures/macAxioma.png'
const Axioma = () => {
    useEffect(() => {
        
    })
    return (
        <section className="Axioma">
           <div className="Axioma__display">
           <div className="macAxioma">
                    <img src={macAxioma} alt="" />
                    <div className="circle"></div>
                </div>
                <div className='Axioma__display__text'>
                    <h1>Axioma</h1>
                    <div className='separator'></div>
                    <h2>Comprehension du besoin client</h2>
                    <h2>Design des maquettes</h2>
                    <h2>Integration wordpress</h2>
                </div>
           </div>
        </section>
    )
}
export default Axioma