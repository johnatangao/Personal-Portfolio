import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import GreetingText from './GreetingText'
import './About.css'
import IntroText from './IntroText'
import SocialMedia from './SocialMedia'
import BackgroundParticles from './BackgroundParticles'

export default class About extends Component {

    render() {

        return (
            <Container fluid={true} className="bg">
                <BackgroundParticles />
                <div className="about-container">
                    <GreetingText bigText={this.props.about.bigText} />
                    <IntroText introText1={this.props.about.introText1} introText2={this.props.about.introText2} />
                    <SocialMedia />
                </div>

            </Container>
        )
    }
}
