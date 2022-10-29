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
    const burger = document.querySelector('.burger');
    const Presentation__colorTransition = document.querySelector(".Presentation__colorTransition")
    const rowl1 = document.querySelector('.rowl1');
    const rowl2 = document.querySelector('.rowl2');
    const rowl3 = document.querySelector('.rowl3');
    const rowl4 = document.querySelector('.rowl4');
    const rowl5 = document.querySelector('.rowl5');
    const rowl6 = document.querySelector('.rowl6');
    const rowl7 = document.querySelector('.rowl7');
    button.addEventListener('click', function(){
      rowl1.classList.add('animWork1');
        rowl2.classList.add('animWork2');
        rowl3.classList.add('animWork3');
        rowl4.classList.add('animWork4');
        rowl5.classList.add('animWork5');
        rowl6.classList.add('animWork6');
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
        burger.classList.remove('hidden');
        rowl1.classList.remove('animWork1');
        rowl2.classList.remove('animWork2');
        rowl3.classList.remove('animWork3');
        rowl4.classList.remove('animWork4');
        rowl5.classList.remove('animWork5');
        rowl6.classList.remove('animWork6');
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
              start: "-200px 100%",
              toggleActions: "restart",
            },
            y : -600,
            duration : 1,
            opacity: 1
        })
        gsap.to(".GsapThree",{
          scrollTrigger: {
            trigger: ".ReactVue",
            start: "-200px 100%",
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
          start: "-200px 100%",
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
        start: "-200px 100%",
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
      scrub:1
    },
    rotation : 8,
  })
  gsap.to(".rowl1",{
    scrollTrigger: {
      trigger: ".Presentation__profil",
      start: "top center",
      scrub:1
    },
    x : -2000
  })
  gsap.to(".rowl2",{
    scrollTrigger: {
      trigger: ".Presentation__profil",
      start: "top 400px",
      scrub:1
    },
    x : 2000
  })
  gsap.to(".btn__flip1",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 0",
      end: '+=300',
      scrub:1,
    },
    rotateX: -90
  })
  gsap.to(".btn__flip2",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 20",
      end: '+=300',
      scrub:1,
    },
    rotateX: -90
  })
  gsap.to(".btn__flip3",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 40",
      end: '+=300',
      scrub:1,
    },
    rotateX: -90
  })
  gsap.to(".btn__flip4",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 60",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip5",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 80",
      end: '+=300',
      scrub:1,
    },
    rotateX: -90
  })
  gsap.to(".btn__flip6",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 100",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip7",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 20",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip8",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 40",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip9",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 60",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip10",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 80",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip11",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 100",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip12",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 120",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip13",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 140",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
  })
  gsap.to(".btn__flip14",{
    scrollTrigger: {
      trigger: ".Dtext",
      start: "top 160",
      end: '+=300',
      scrub:1
    },
    rotateX: -90
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
    Presentation__colorTransition.addEventListener("mouseover", function(){
          cursorCircle.style.borderColor = "#F4DECF"
    })
    Presentation__colorTransition.addEventListener("mouseout", function(){
      cursorCircle.style.borderColor = "#16005b"
    })
    let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            burger.style.right = "-11.5%";
        } else {
            burger.style.right = "-16%";
        }
        prevScrollpos = currentScrollPos;
    }
    function navPlacement(){
        const screenWidth = window.screen.width
        console.log(screenWidth)
        const burgerWidth = 100
        console.log(burgerWidth)
    }
    navPlacement();
});

  return (
    <section className="App">
        <div className='burger hidden'>
          <a href="#contact"><h2>contact</h2></a>
          <a href="#project"><h2>project</h2></a>
          <a href="#home"><h2>home</h2></a>
        </div>
      <Animation/>
      <Home/>
      <Presentation/>
      <Cursor/>
    </section>
  );
}
export default App;
