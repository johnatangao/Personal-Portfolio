import React from 'react'
import Particles from 'react-particles-js'
import './Home.css'

export default function BackgroundParticles() {

    const particleOpt = {
        particles: {
            particles: {
                number: {
                    value: Math.ceil(window.innerWidth/2),
                }
            }
        }
    }

    return (
        <div>
            <Particles height="88vh" param={particleOpt}/>
        </div>
    )
}
