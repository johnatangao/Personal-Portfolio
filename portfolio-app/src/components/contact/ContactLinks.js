import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

export default function ContactLinks(props) {

    return (
        <div id="contact-bg">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/johnatangao">
                <FontAwesomeIcon className="socialMedia" icon={faGithub} size='5x' style={{ color: 'white' }} />
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/johnatangao/">
                <FontAwesomeIcon className="socialMedia" icon={faLinkedinIn} size='5x' style={{ color: 'white' }} />
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/johnatangao">
                <FontAwesomeIcon className="socialMedia" icon={faFacebook} size='5x' style={{ color: 'white' }} />
            </a>

        </div>
    )
}
