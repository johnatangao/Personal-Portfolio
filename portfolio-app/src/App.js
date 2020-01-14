import React, { Component } from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import content from './content';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header navbarContent = {content.header}/>
        <About about = {content.about} />
        <Resume resume = {content.resume}/>
        <Portfolio portfolio= {content.portfolio} />
      </div>
    )
  }
}