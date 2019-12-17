import React, { Component } from 'react';

import FixedNav from './components/fixedNav'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import HeroBox from './components/heroBox'
import Projects from './components/projects'

import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedNav />
        <HeroBox />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
