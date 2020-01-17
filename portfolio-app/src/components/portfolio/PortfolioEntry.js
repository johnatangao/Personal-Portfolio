import React from 'react'
import { Image } from 'react-bootstrap'
import './Portfolio.css'

export default function PortfolioEntry(props) {
    return (
        <div id="portfolio-entry-container">
            <div className="container-port">
                <Image className="image" width="280px" height="280px" src={props.image} alt="project-thumbnail" />
                <div className="middle">
                    <div className="text"><a id="code-link" rel="noopener noreferrer" target="_blank" href={props.codeLink}>Code</a></div>
                </div>
            </div>

        </div>
    )
}
