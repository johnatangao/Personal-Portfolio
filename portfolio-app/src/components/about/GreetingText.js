import React from 'react'
import './About.css'

export default function GreetingText(props) {

    return (
        <div>
            <h1 className="bigText text-white">{props.bigText}</h1>
        </div>
    )
}

