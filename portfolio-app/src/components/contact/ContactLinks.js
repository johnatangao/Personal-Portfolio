import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

export default function ContactLinks(props) {
    return (
        <div id="contact-bg">
            <FontAwesomeIcon className="contact-media" icon={faGithub} size='5x' style={{ color: 'white' }}/>
            <FontAwesomeIcon className="contact-media" icon={faLinkedinIn} size='5x' style={{ color: 'white' }}/>
            <FontAwesomeIcon className="contact-media" icon={faFacebook} size='5x' style={{ color: 'white' }}/>
        </div>
    )
}
