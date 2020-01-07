import React from 'react'
import './GreetingText.css'

export default function GreetingText(props) {

    const greetings = props.greetings
    return (
        <div>
            <h1 className="bigText text-white">{greetings['bigText']}</h1>
            <h1 className="text-white">{greetings['smallText']}</h1>
        </div>
    )
}

