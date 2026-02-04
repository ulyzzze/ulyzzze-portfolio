import React from 'react'
import SceneInit from '../SceneInit';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeLogoScene = ({ modelPath, canvasId, text, x, y, z }) => {
    useEffect(() => {
                // Vérifier que le canvas existe avant d'initialiser
                const canvas = document.getElementById(canvasId);
                if (!canvas) {
                    console.error('Canvas non trouvé avec l\'ID:', canvasId);
                    return;
                }
        
                const test = new SceneInit(canvasId);
                test.initialize();
                test.animate();
        
                let loadedModel;
                const gltfLoader = new GLTFLoader();
                gltfLoader.load(modelPath, (gltfScene) => {
                    console.log('Gltf model succesfully loaded:', gltfScene);
                    loadedModel = gltfScene;
                    loadedModel.scene.scale.set(x, y, z);
                    loadedModel.scene.position.y = 0;
                    loadedModel.scene.position.x = 0;
                    loadedModel.scene.position.z = 0;
                    test.scene.add(gltfScene.scene);
                }, undefined, (error) => {
                    console.error('Error when loading the gltf model:', error);
                });
        
                const animate = () => {
                    if (loadedModel) {
                        // Animation de rotation
                        loadedModel.scene.rotation.y -= 0.001;
                        
                        // Animation de léger mouvement oscillatoire
                        const time = Date.now() * 0.003; // Contrôle la vitesse du mouvement
                        const oscillationY = Math.sin(time) * 0.05; // Mouvement vertical subtil
                        const oscillationX = Math.cos(time * 0.7) * 0.03; // Mouvement horizontal encore plus subtil
                        
                        // Applique le mouvement oscillatoire à la position
                        loadedModel.scene.position.y = oscillationY;
                        loadedModel.scene.position.x = oscillationX;
                        loadedModel.scene.position.z = 0;
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
            }, [modelPath, canvasId, x, y, z]); // Ajouter les dépendances
            
  return (
    <div className='h-[26rem] w-[14rem] bg-black-100/80 backdrop-blur-sm rounded-2xl sm:rounded-[8rem] hover:bg-gradient-to-br hover:from-black-100 hover:to-black-200/50 hover:border hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/5'>
        <div className='w-full max-w-2xl h-[19rem] mt-0'>
            <canvas id={canvasId} className='w-full h-full rounded-2xl sm:rounded-[8rem]' />
        </div>
        <p className='text-center font-bold text-xl'>{text}</p>
    </div>
  )
}

export default ThreeLogoScene