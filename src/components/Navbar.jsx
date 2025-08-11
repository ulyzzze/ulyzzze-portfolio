import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = ({ isProjectModalOpen }) => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`px-6 sm:px-[2rem] lg:px-[5rem] fixed  backdrop-blur-sm overflow-hidden top-0 w-[100%] z-40 transition-all duration-500 ${scrolled ? 'border-b' : 'border-0'} border-gray-800/50 ${isProjectModalOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'}`}>
      <div className={`flex flex-row justify-between items-center transition-all duration-300 ${scrolled ? 'py-[1rem]' : 'py-[3rem]'}`}>
        <a className='sm:text-2xl text-xl font-medium font-[roboto] tracking-wide sm:max-w-full text-center max-w-1 hidden sm:flex'>Ulysse COUCHOUD</a>
        <div className='sm:text-2xl text-xl font-medium font-[roboto] tracking-wide sm:max-w-full text-center max-w-1 sm:hidden'>Ulysse</div>
        <div className='md:flex gap-10 hidden'>
            <a className='hover:text-purple-300 transition-colors cursor-pointer' href='#experience'>Expérience</a>
            <a className='hover:text-purple-300 transition-colors cursor-pointer' href='#skills'>Compétences</a>
            <a className='hover:text-purple-300 transition-colors cursor-pointer' href='#projects'>Projets</a>
        </div>
        <a href="#contact">
          <button className="btn btn-outline hover:bg-white hover:text-black" >Me contacter</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar