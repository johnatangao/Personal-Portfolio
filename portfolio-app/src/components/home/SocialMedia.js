import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Home.css'

export default function SocialMedia(props) {
    return (
        <div>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/johnatangao">
                <FontAwesomeIcon className="socialMedia" icon={faGithub} size='2x' style={{ color: 'white' }} />
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/johnatangao/">
                <FontAwesomeIcon className="socialMedia" icon={faLinkedinIn} size='2x' style={{ color: 'white' }} />
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/johnatangao">
                <FontAwesomeIcon className="socialMedia" icon={faFacebook} size='2x' style={{ color: 'white' }} />
            </a>

        </div>
    )
}