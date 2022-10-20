import React from 'react'
import '../../style.css'
import {useEffect} from "react";
const Dtext = () => {
    useEffect(() => {
            let about = document.querySelector('#about') 
            let btnFlip1 = document.querySelector('.btn__flip1')
            let btnFlip2 = document.querySelector('.btn__flip2')
            let btnFlip3 = document.querySelector('.btn__flip3')
            let btnFlip4 = document.querySelector('.btn__flip4')
            let btnFlip5 = document.querySelector('.btn__flip5')
            let btnFlip6 = document.querySelector('.btn__flip6')
            let btnFlip7 = document.querySelector('.btn__flip7')
            let btnFlip8 = document.querySelector('.btn__flip8')
            let btnFlip9 = document.querySelector('.btn__flip9')
            let btnFlip10 = document.querySelector('.btn__flip10')
            let btnFlip11 = document.querySelector('.btn__flip11')
            let btnFlip12 = document.querySelector('.btn__flip12')
            let btnFlip13 = document.querySelector('.btn__flip13')
            let btnFlip14 = document.querySelector('.btn__flip14')
        about.addEventListener('mouseover', function(){
            btnFlip1.style.transform = 'rotateX(-90deg)'
            btnFlip2.style.transform = 'rotateX(-90deg)'
            btnFlip3.style.transform = 'rotateX(-90deg)'
            btnFlip4.style.transform = 'rotateX(-90deg)'
            btnFlip5.style.transform = 'rotateX(-90deg)'
            btnFlip6.style.transform = 'rotateX(-90deg)'
            btnFlip7.style.transform = 'rotateX(-90deg)'
            btnFlip8.style.transform = 'rotateX(-90deg)'
            btnFlip9.style.transform = 'rotateX(-90deg)'
            btnFlip10.style.transform = 'rotateX(-90deg)'
            btnFlip11.style.transform = 'rotateX(-90deg)'
            btnFlip12.style.transform = 'rotateX(-90deg)'
            btnFlip13.style.transform = 'rotateX(-90deg)'
            btnFlip14.style.transform = 'rotateX(-90deg)'
        })
        about.addEventListener('mouseout', function(){
        btnFlip1.style.transform = 'rotateX(0deg)'
        btnFlip2.style.transform = 'rotateX(0deg)'
        btnFlip3.style.transform = 'rotateX(0deg)'
        btnFlip4.style.transform = 'rotateX(0deg)'
        btnFlip5.style.transform = 'rotateX(0deg)'
        btnFlip6.style.transform = 'rotateX(0deg)'
        btnFlip7.style.transform = 'rotateX(0deg)'
        btnFlip8.style.transform = 'rotateX(0deg)'
        btnFlip9.style.transform = 'rotateX(0deg)'
        btnFlip10.style.transform = 'rotateX(0deg)'
        btnFlip11.style.transform = 'rotateX(0deg)'
        btnFlip12.style.transform = 'rotateX(0deg)'
        btnFlip13.style.transform = 'rotateX(0deg)'
        btnFlip14.style.transform = 'rotateX(0deg)'
        })
    })
    return (
        <section className="Dtext">
            <div clasName="Dtext__recyclable">
                    <div class="About3D" id="about">
                        <div>
                            <div class="btn3d">
                                <div class="btn__flip btn__flip1">
                                    <h1 class="btn__flip--off">P</h1>
                                    <h1 class="btn__flip--on">P</h1>
                                </div>
                            </div>
                            <div class="btn3d">
                                <div class="btn__flip btn__flip2">
                                    <h1 class="btn__flip--off">R</h1>
                                    <h1 class="btn__flip--on">R</h1>
                                </div>
                            </div>
                            <div class="btn3d spaceLetter">
                                <div class="btn__flip btn__flip3 ">
                                    <h1 class="btn__flip--off">O</h1>
                                    <h1 class="btn__flip--on">O</h1>
                                </div>
                            </div>
                            <div class="btn3d">
                                <div class="btn__flip btn__flip4">
                                    <h1 class="btn__flip--off">A</h1>
                                    <h1 class="btn__flip--on">A</h1>
                                </div>
                            </div>
                            <div class="btn3d">
                                <div class="btn__flip btn__flip5 ">
                                    <h1 class="btn__flip--off">N</h1>
                                    <h1 class="btn__flip--on">N</h1>
                                </div>
                            </div>
                            <div class="btn3d">
                                <div class="btn__flip btn__flip6 ">
                                    <h1 class="btn__flip--off">D</h1>
                                    <h1 class="btn__flip--on">D</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="btn3d">
                                    <div class="btn__flip btn__flip7 ">
                                        <h1 class="btn__flip--off">C</h1>
                                        <h1 class="btn__flip--on">C</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip8 ">
                                        <h1 class="btn__flip--off">R</h1>
                                        <h1 class="btn__flip--on">R</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip9 ">
                                        <h1 class="btn__flip--off">E</h1>
                                        <h1 class="btn__flip--on">E</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip10 ">
                                        <h1 class="btn__flip--off">A</h1>
                                        <h1 class="btn__flip--on">A</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip11 ">
                                        <h1 class="btn__flip--off">T</h1>
                                        <h1 class="btn__flip--on">T</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip12 ">
                                        <h1 class="btn__flip--off">I</h1>
                                        <h1 class="btn__flip--on">I</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip13 ">
                                        <h1 class="btn__flip--off">V</h1>
                                        <h1 class="btn__flip--on">V</h1>
                                    </div>
                                </div>
                                <div class="btn3d">
                                    <div class="btn__flip btn__flip14 ">
                                        <h1 class="btn__flip--off">E</h1>
                                        <h1 class="btn__flip--on">E</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    )
}
export default Dtext