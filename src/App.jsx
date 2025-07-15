import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App