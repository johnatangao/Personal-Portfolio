import React from 'react'
import './About.css'

export default function IntroText(props) {

    return (
        <div>
            <h1 className="text-white introText">{props.introText1}</h1>
            <h1 className="text-white introText">{props.introText2}</h1>
        </div>
    )
}
