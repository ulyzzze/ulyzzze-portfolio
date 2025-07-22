import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projetcs from './sections/Projetcs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projetcs />
    </>
  );
}

export default App