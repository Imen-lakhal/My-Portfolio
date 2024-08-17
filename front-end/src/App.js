import React from 'react';
import './App.css';
import './index.css';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

function App() {
  return (
  
    <main className= "main">
      <Header />
      <Home />
      <Services />
      <Skills />
      <Resume />
      <Projects/>
      <Contact />
      <Footer />
      
      
    </main>
  );
}

export default App;
 