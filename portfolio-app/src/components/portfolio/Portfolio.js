import React from 'react'
import { Container } from 'react-bootstrap'
import PortfolioEntry from './PortfolioEntry'
import './Portfolio.css'

import connect4 from './Images/connect-4-thumb.png'
import bloc from './Images/bloc-ressort-thumb.PNG'
import riemann from './Images/riemann-thumb.PNG'
import rocket from './Images/sim-rocket-thumb.PNG'
import stanlee from './Images/stan-lee-thumb.PNG'
import tictactoe from './Images/tic-tac-toe-thumb.PNG'

export default function Portfolio(props) {
    console.log(props.portfolio[0].Github)
    return (
        <div id="portfolio-background">

            <h1 id="portfolio-title"><b>My Work</b></h1>

            <Container fluid={true} className="bg" id="Portfolio-bg" >
                <PortfolioEntry image={connect4} codeLink={props.portfolio[0].Github}/>
                <PortfolioEntry image={bloc} codeLink={props.portfolio[1].Github}/>
                <PortfolioEntry image={riemann} codeLink={props.portfolio[2].Github}/>

                <PortfolioEntry image={rocket} codeLink={props.portfolio[3].Github}/>
                <PortfolioEntry image={stanlee} codeLink={props.portfolio[4].Github}/>
                <PortfolioEntry image={tictactoe} codeLink={props.portfolio[5].Github}/>

            </Container>
        </div>

    )
}
