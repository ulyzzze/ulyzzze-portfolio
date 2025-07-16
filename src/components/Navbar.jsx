import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {
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
    <div className='px-6 sm:px-[2rem] lg:px-[5rem] fixed bg-black overflow-hidden top-0 w-[100%] z-1'>
      <div className={`flex flex-row justify-between items-center transition-all duration-300 ${scrolled ? 'py-[1rem]' : 'py-[3rem]'}`}>
        <a className='sm:text-2xl text-xl font-medium font-[roboto] tracking-wide sm:max-w-full text-center max-w-1 hidden sm:flex'>Ulysse COUCHOUD</a>
        <div className='sm:text-2xl text-xl font-medium font-[roboto] tracking-wide sm:max-w-full text-center max-w-1 sm:hidden'>Ulysse</div>
        <div className='md:flex gap-10 hidden'>
            <a className='hover:text-purple-300 transition-colors cursor-pointer'>Projet</a>
            <a className='hover:text-purple-300 transition-colors cursor-pointer'>Expérience</a>
            <a className='hover:text-purple-300 transition-colors cursor-pointer'>Compétences</a>
        </div>
        <button className="btn btn-outline hover:bg-white hover:text-black">Me contacter</button>
      </div>
    </div>
  )
}

export default Navbar