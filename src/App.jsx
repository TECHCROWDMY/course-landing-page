import React from 'react';
import { Courses, Navbar, Hero } from './components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const App = () => {
  return (
    <div className='font-public-sans'>
      <Navbar />
      <Hero />
      <Courses />
    </div>
  )
}

export default App