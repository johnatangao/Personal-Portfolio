import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Home.css'

export default function SocialMedia(props) {
    return (
        <div>
            <FontAwesomeIcon src="google.ca" className="socialMedia" icon={faGithub} size='2x' style={{ color: 'white' }} />

            <FontAwesomeIcon className="socialMedia" icon={faLinkedinIn} size='2x' style={{ color: 'white' }} />
            <FontAwesomeIcon className="socialMedia" icon={faFacebook} size='2x' style={{ color: 'white' }} />
        </div>
    )
}