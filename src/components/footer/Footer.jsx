import React from 'react'
import '../../style.css'
import Gif from '../../assets/pictures/mrrobot.gif'
const Footer = () => {
    return (
        <section className="Footer">
            {/* <h1>Je recherche une alterance <span>and</span> I'm ready to work !</h1> */}
           <nav>
                <ul>
                   <a href=""><li>Git</li></a> 
                   <a href=""><li>Linkedin</li></a> 
                   <a href=""><li><span>Mon CV</span></li></a> 
                </ul>
           </nav>
          <div className="gifSection">
            <h1>Ready to <br/> <span>work !</span> </h1>
            <img src={Gif} alt="" />
          </div>
        </section>
    )
}
export default Footer
