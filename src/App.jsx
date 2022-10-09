import React from 'react'
import Home from "./components/home/Home";
import Animation from "./components/animation/Animation";
import Presentation from "./components/presentation/Presentation";
import Cursor from "./components/cursor/Cursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useEffect} from "react";
function App() {
  useEffect(() => {
    
    const App = document.querySelector('.App');
    const Home = document.querySelector('.Home');
    const Animation = document.querySelector('.Animation');
    const Presentation = document.querySelector('.Presentation');
    const cursorMenu = document.querySelector('.cursorMenu');
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');
    const button = document.querySelector('.Home__Button');
   
    const rowl1 = document.querySelector('.rowl1');
    const rowl2 = document.querySelector('.rowl2');
    const rowl3 = document.querySelector('.rowl3');
    const rowl4 = document.querySelector('.rowl4');
    const rowl5 = document.querySelector('.rowl5');

    button.addEventListener('click', function(){
        rowl1.classList.add('animWork1');
        rowl2.classList.add('animWork2');
        rowl3.classList.add('animWork3');
        rowl4.classList.add('animWork4');
        rowl5.classList.add('animWork5');
        button.style.scale = "0";
        Animation.classList.add('indexMajor')
        setTimeout(disapear, 500);
        setTimeout(rowlBack, 2000);
        setTimeout(indexation, 4000)
    })
    function disapear(){
        button.parentNode.removeChild(button);
        cursorCircle.classList.remove('hover');
    }
    function rowlBack(){
        Home.classList.add('hidden');
        Presentation.classList.remove('hidden');
        rowl1.classList.remove('animWork1');
        rowl2.classList.remove('animWork2');
        rowl3.classList.remove('animWork3');
        rowl4.classList.remove('animWork4');
        rowl5.classList.remove('animWork5');
        
    }
    function indexation(){
      Animation.classList.remove('indexMajor')
      App.style.overflow = "scroll";
      Animation.style.display = "none";
      gsap.registerPlugin(ScrollTrigger);
        gsap.to(".Presentation__cadre",{
            scrollTrigger: {
              trigger: ".Presentation__cadre",
              start: "top 10%",
              end: "bottom 10%",
              scrub:1
            },
            scale : 1.2,
            width : 1000,
            y: 150
        })
        gsap.to(".ReactVue",{
            scrollTrigger: {
              trigger: ".ReactVue",
              start: "0 80%",
              
              toggleActions: "restart",
            },
            y : -600,
            duration : 1,
            opacity: 1
        })
        gsap.to(".GsapThree",{
          scrollTrigger: {
            trigger: ".ReactVue",
            start: "0 80%",
           
            toggleActions: "restart",
          },
          y : -400,
          duration : 1,
          opacity: 1,
          delay: 0.5
      })
      gsap.to(".PhpMysql",{
        scrollTrigger: {
          trigger: ".ReactVue",
          start: "0 80%",
          toggleActions: "restart",
        },
        y : -200,
        duration : 1,
        opacity: 1,
        delay: 1
    })
    gsap.to(".XdFigma",{
      scrollTrigger: {
        trigger: ".ReactVue",
        start: "0 80%",
        toggleActions: "restart",
      },
      y : 0,
      duration : 1,
      opacity: 1,
      delay: 1.5
  })
    gsap.to(".square",{
      scrollTrigger: {
        trigger: ".Presentation__projects",
        start: "top center",
        toggleActions: "restart",
        scrub:1
      },
      rotation : 8,
  })
  gsap.to(".square2",{
    scrollTrigger: {
      trigger: ".Presentation__colorTransition",
      start: "20% top",
      toggleActions: "restart",
      scrub:1
    },
    rotation : 8,
})
        
  }
    const mouse = { x: -100, y: -100 }; 
    const pos = { x: 0, y: 0 }; 
    const speed = 0.1; 

    const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);


    function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
    }


    const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);
    
    pos.x += diffX * speed;
    pos.y += diffY * speed;
    
    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);
    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = scale;
    };

    function loop() {
    updateCursor();
    requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
    const nextDiv = document.querySelector('.Home__Button');
    nextDiv.addEventListener('mouseover',  function(){
        cursorCircle.classList.add('hover');
        nextDiv.style.scale = '1.3';
    })
    nextDiv.addEventListener('mouseout',  function(){
        cursorCircle.classList.remove('hover');
        nextDiv.style.scale = '1';
    })
    document.querySelectorAll('.liMenu').forEach(item => {
      item.addEventListener('mouseover', event => {
          cursorMenu.style.display = "block";
          cursorCircle.classList.add("hoverMenu");
      })
    })
    document.querySelectorAll('.liMenu').forEach(item => {
      item.addEventListener('mouseout', event => {
          cursorMenu.style.display = "none";
          cursorCircle.classList.remove("hoverMenu");
      })
    })

  //   const Paranoid = document.querySelector('.Paranoid');
  //   gsap.to("#circle1",{
  //     scrollTrigger: {
  //       trigger: ".Paranoid",
  //       start: "20% top",
  //       toggleActions: "restart",
  //       scrub:1,
  //       markers : "true"
  //     },
  //     y : 700,
  // })
   
});




  return (
    <section className="App">
      <Animation/>
      <Home/>
      <Presentation/>
      <Cursor/>
    </section>
  );
}
export default App;
