import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Coding from './components/Coding';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

import ScrollToTop from "react-scroll-to-top";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import AppProvider from './app-context/AppContext';

const App = () => {


  return (
    <AppProvider>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-neutral-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(23,28,145,0.3),rgba(255,255,255,0))]">
          </div>
        </div>
        <div className='container mx-auto px-8 py-10 justify-center items-center'>
          <ScrollToTop
            component={<div className='flex flex-auto w-full h-full bg-slate-500 items-center justify-center rounded-sm'><MdKeyboardDoubleArrowUp className='w-12 h-12' /></div>}
            smooth
          />
          <NavBar></NavBar>
          <Hero></Hero>
          <About></About>
          <Technologies></Technologies>
          <Coding></Coding>
          <Experience></Experience>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
