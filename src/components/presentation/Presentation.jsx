import React from 'react'
import '../../style.css';
import {useEffect} from "react";
import Profil from '../../assets/pictures/bretagnePicture.png'
import Footer from "../footer/Footer";
import Paranoid from "../projects/Paranoid";
import Axioma from "../projects/Axioma";
import Flamingod from "../projects/Flamingod";
import Aubrac from "../projects/Aubrac";

const Presentation = () => {
    useEffect(() => {
        
    })
    return (
        <section className="Presentation hidden">
            <div className="Presentation__picture">
                <div className='Presentation__cadre'>
                    <img src={Profil} alt="Profil picture"/>
                </div>
                <div className="Presentation__surText">
                    <h2 className="Presentation__surText__h2">Fr<span>o</span>ntend <br/> devel<span>o</span>per</h2>
                </div>
            </div>
            <div className="Presentation__tech">
                <p className='ReactVue'>REACT - <span>VUE JS</span></p>
                <p className='GsapThree'>GSAP - <span>THREE </span></p>
                <p className='PhpMysql'>PHP - <span>MY SQL</span></p>
                <p className='XdFigma'>XD - <span>FIGMA</span></p>
            </div>
            <div className="Presentation__projects">
                <div className="square"></div>
                {/* <img src={Arrow} alt="" /> */}
            </div>
            <div className="Presentation__colorTransition">
                <div className='menu'>
                    <nav>
                        <ul>
                            <li className="liMenu">P Broccoli</li>
                            <li className="liMenu">Axioma</li>
                            <li className="liMenu">FlaminGod</li>
                            <li className="liMenu">Aubrac</li>
                        </ul>
                    </nav>
                    <h2>all <br/> my <br/> w<span>o</span>rk</h2>
                </div>
            </div>
            <div className="Presentation__projects">
                <div className="square2"></div>
            </div>
            <div className="Presentation__project">
                <Paranoid/>
            </div>
            <div className="Presentation__project">
               <Axioma/>
            </div>
            <div className="Presentation__project">
               <Flamingod/>
            </div>
            <div className="Presentation__project">
               <Aubrac/>
            </div>
            <Footer/>
        </section>
    )
}
export default Presentation
