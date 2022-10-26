import React from 'react'
import '../../style.css';
import macAxioma from '../../assets/pictures/macAxioma.png'
import macAxiomaR from '../../assets/pictures/axioma_r.png'
const Axioma = () => {
    return (
        <section className="Axioma">
           <div className="Axioma__display">
           <div className="macAxioma">
                    <img className="ax" src={macAxioma} alt="" />
                    <img className="axr" src={macAxiomaR} alt="" />
                    <div className="circle"></div>
                </div>
                <div className='Axioma__display__text'>
                    <h1>Axioma</h1>
                    <div className='separator'></div>
                    <h2><span className="wowYouAreLostedInMyCode">Comprehension</span> du besoin client</h2>
                    <h2><span>Design des maquettes</span></h2>
                    <h2>Integration wordpress</h2>
                </div>
           </div>
        </section>
    )
}
export default Axioma