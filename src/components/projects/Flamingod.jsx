import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../../style.css';
import {useEffect} from "react";
import macFlamingod from '../../assets/pictures/macFlamingod.png'
import macFlamingodR from '../../assets/pictures/flamingodR.png'
const Flamingod = () => {
    useEffect(() => {
        
    })
    return (
        <section className="Flamingod">
           <div className="Flamingod__display">
                <div className='Flamingod__display__text'>
                    <h1>Flamingod</h1>
                    <div className='separator'></div>
                    <h2>Design des maquettes</h2>
                    <h2><span>Intégration avec Structure Synfony</span></h2>
                    <h2>Mise en ligne</h2>                
                </div>
                <div className="macFlamingod">
                    <img className="fg" src={macFlamingod} alt="" />
                    <img className="fgr" src={macFlamingodR} alt="" />
                    <div className="circle"></div>
                </div>
           </div>
        </section>
    )
}
export default Flamingod
