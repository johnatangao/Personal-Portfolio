import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import GreetingText from './GreetingText'
import './About.css'
import IntroText from './IntroText'

export default class About extends Component {

    render() {

        return (
            <Container fluid={true} className="bg">
                <GreetingText smallText = {this.props.about.smallText} bigText = {this.props.bigText} />
                <IntroText introText1 = {this.props.about.introText1} introText2 = {this.props.about.introText2}/>
            </Container>
        )
    }
}
