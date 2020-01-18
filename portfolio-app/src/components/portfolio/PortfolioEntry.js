import React from 'react'
import { Image } from 'react-bootstrap'
import './Portfolio.css'

import DevIcon from "devicon-react-svg";

export default function PortfolioEntry(props) {

    const devIconStyle = {
        fill: "white",
        width: "35px",
    };

    return (
        <div id="portfolio-entry-container">
            <div className="container-port">
                <Image className="image" width="280px" height="280px" src={props.image} alt="project-thumbnail" />
                <div className="middle">
                    <div className="text">
                        <h5 id="middle-title">{props.name}</h5>
                        <h6 id="middle-skills">
                            {
                            props.skills.map(
                                (skill) => {
                                    return (
                                        <DevIcon key={skill} icon={skill} style={devIconStyle}/>
                                    )
                                }
                            )
                        }
                        </h6>
                        
                        <a id="code-link" rel="noopener noreferrer" target="_blank" href={props.codeLink}>Code</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
