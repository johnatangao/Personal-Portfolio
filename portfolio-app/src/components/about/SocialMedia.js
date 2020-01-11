import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import './About.css'

export default class SocialMedia extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon className="socialMedia" icon={faGithub} size='2x' style={{ color: 'white' }}/>
                <FontAwesomeIcon className="socialMedia" icon={faLinkedinIn} size='2x' style={{ color: 'white' }}/>
                <FontAwesomeIcon className="socialMedia" icon={faFacebook} size='2x' style={{ color: 'white' }}/>
            </div>
        )
    }
}
