import React from 'react'
import Particles from 'react-particles-js'
import './About.css'

export default function BackgroundParticles() {

    const particleOpt = {
        particles: {
            particles: {
                number: {
                    value: 100,
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
