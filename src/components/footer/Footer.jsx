import React from 'react'
import '../../style.css'
import Gif from '../../assets/pictures/mrrobot.gif'

const Footer = () => {
    return (
        <section className="Footer">
            {/* <h1>Je recherche une alterance <span>and</span> I'm ready to work !</h1> */}
           <nav>
                <ul>
                   <a href="https://github.com/matdn"><li>Git</li></a> 
                   <a href="https://www.linkedin.com/in/matis-dene/"><li>Linkedin</li></a> 
                </ul>
           </nav>
           <div className='separator'></div>
          <div className="gifSection">
            <h1>Ready to <br/> <span>work !</span> </h1>
            <img src={Gif} alt="" />
          </div>
        </section>
    )
}
export default Footer
