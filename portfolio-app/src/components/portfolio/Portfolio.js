import React from 'react'
import { Container } from 'react-bootstrap'
import PortfolioEntry from './PortfolioEntry'
import './Portfolio.css'

export default function Portfolio(props) {
    return (
        <div id="portfolio-background">

            <h1 id="portfolio-title"><b>My Work</b></h1>

            <Container fluid={true} className="bg" id="Portfolio-bg" >
                <PortfolioEntry />
                <PortfolioEntry />
                <PortfolioEntry />

                <PortfolioEntry />
                <PortfolioEntry />
                <PortfolioEntry />

            </Container>
        </div>

    )
}
