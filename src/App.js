import React from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="app">
      
      <div className='section'>
      <Topbar/>
      <Intro/>
      <About/>
      <Projects />
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
