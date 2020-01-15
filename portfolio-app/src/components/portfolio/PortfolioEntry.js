import React from 'react'
import {Image} from 'react-bootstrap'
import './Portfolio.css'

export default function PortfolioEntry(props) {
    return (
        <div id="portfolio-entry-container">
            <Image width="280px" height="280px" src="https://reactjs.org/logo-og.png" />
        </div>
    )
}
