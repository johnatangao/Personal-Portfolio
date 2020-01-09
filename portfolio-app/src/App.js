import React, { Component } from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import content from './content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header navbarContent = {content.header}/>
        <About about = {content.about} />
      </div>
    )
  }
}