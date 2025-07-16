import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Experience from './sections/Experience';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
    </>
  );
}

export default App