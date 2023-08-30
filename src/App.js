import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </main>
      
    </>
  );
}

export default App;
