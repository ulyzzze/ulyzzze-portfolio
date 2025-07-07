import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import Hero from './sections/Hero';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import SceneInit from './SceneInit';

const App = () => {
    // useEffect(() => {
    //     const test = new SceneInit('myThreeJsCanvas');
    //     test.initialize();
    //     test.animate();

    //     let loadedModel;
    //     const gltfLoader = new GLTFLoader();
    //     gltfLoader.load('/src/react_logo_circle/scene.gltf', (gltfScene) => {
    //         loadedModel = gltfScene;
    //         test.scene.add(gltfScene.scene);
    //     });
    //     const animate = () => {
    //         if (loadedModel) {
    //             loadedModel.scene.rotation.x += 0.01;
    //             loadedModel.scene.rotation.y += 0.01;
    //             loadedModel.scene.rotation.z += 0.01;
    //         }
    //         requestAnimationFrame(animate);
    //     };
    //     animate();
    // }, []);
  return (
    <Hero />
  );
}

export default App