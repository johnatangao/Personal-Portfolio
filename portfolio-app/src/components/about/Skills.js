import React from 'react'
import './About.css'
import DevIcon from "devicon-react-svg";

export default function Skills(props) {

    const devIconStyle = {
        fill: "white",
        width: "50px",
    };

    return (
        <div>
            <h5>Skills : </h5>
            <DevIcon icon="html5" style={devIconStyle} />
            <DevIcon icon="css3" style={devIconStyle} />
            <DevIcon icon="javascript" style={devIconStyle} />
            <DevIcon icon="react" style={devIconStyle} />
            <DevIcon icon="java" style={devIconStyle} />
            <svg viewBox="0 0 128 128" style={devIconStyle}>
                <path fill="black" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="black" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path><path d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zM100.6 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"></path>
            </svg>
            <DevIcon icon="python" style={devIconStyle} />
            <DevIcon icon="git" style={devIconStyle} />
            <DevIcon icon="linux" style={devIconStyle} />
        </div>
    )
}
