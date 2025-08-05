import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projetcs from './sections/Projetcs';
import Contact from './sections/Contact';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground />
      <Navbar isProjectModalOpen={isProjectModalOpen} />
      <Hero />
      <Experience />
      <Skills />
      <Projetcs onModalStateChange={setIsProjectModalOpen} />
      <Contact />
    </>
  );
}

export default App