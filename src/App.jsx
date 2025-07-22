import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projetcs from './sections/Projetcs';

const App = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <>
      <Navbar isProjectModalOpen={isProjectModalOpen} />
      <Hero />
      <Experience />
      <Skills />
      <Projetcs onModalStateChange={setIsProjectModalOpen} />
    </>
  );
}

export default App