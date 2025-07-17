import React from 'react'
import SceneInit from '../SceneInit'
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Skills = () => {
    useEffect(() => {
            // Vérifier que le canvas existe avant d'initialiser
            const canvas = document.getElementById('reactCanvas');
            if (!canvas) {
                console.error('Canvas non trouvé');
                return;
            }
    
            const test = new SceneInit('reactCanvas');
            test.initialize();
            test.animate();
    
            let loadedModel;
            const gltfLoader = new GLTFLoader();
            gltfLoader.load('/models/react_logo/scene.gltf', (gltfScene) => {
                console.log('Gltf model succesfully loaded:', gltfScene);
                loadedModel = gltfScene;
                loadedModel.scene.scale.set(0.8, 0.8, 0.8);
                loadedModel.scene.position.y = 0;
                loadedModel.scene.position.x = 0;
                loadedModel.scene.position.z = 0;
                test.scene.add(gltfScene.scene);
            }, undefined, (error) => {
                console.error('Error when loading the gltf model:', error);
            });
    
            const animate = () => {
                if (loadedModel) {
                    loadedModel.scene.rotation.y -= 0.001;
                }
                requestAnimationFrame(animate);
            };
            animate();
    
            // Fonction pour redimensionner le canvas
            const handleResize = () => {
                // Délai pour permettre au DOM de se mettre à jour
                setTimeout(() => {
                    test.onWindowResize();
                }, 100);
            };
    
            // Écouter les changements de taille de fenêtre
            window.addEventListener('resize', handleResize);
    
            // Nettoyage lors du démontage du composant
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

  return (
    <div id='skills'>
        <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold pb-[5rem] text-center'>Compétences</h1>
        <div className='flex flex-row items-center justify-center'>
            <div className='h-[26rem] w-[14rem] bg-black-100 rounded-[8rem] hover:bg-black-200 transition-colors'>
                <div className='w-full max-w-2xl h-[19rem] mt-0'>
                    <canvas id="reactCanvas" className='w-full h-full' />
                </div>
                <p className='text-center font-bold text-xl px-6'>Développeur React</p>
            </div>
        </div>
    </div>
  )
}

export default Skills