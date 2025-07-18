import React from 'react'
import ThreeLogoScene from '../components/ThreeLogoScene';

const Skills = () => {
  return (
    <div id='skills'>
        <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold pb-[5rem] text-center'>Compétences</h1>
        <div className='flex flex-row items-center justify-center gap-[5rem] flex-wrap'>
            <ThreeLogoScene modelPath="/models/react_logo/scene.gltf" canvasId="reactCanvas" text="React" x={0.8} y={0.8} z={1}/>
            <ThreeLogoScene modelPath="/models/python_logo/scene.gltf" canvasId="pythonCanvas" text="Python" x={0.7} y={0.7} z={0.3}/>
            <ThreeLogoScene modelPath="/models/c_logo/scene.gltf" canvasId="C++Canvas" text="C++" x={0.06} y={0.06} z={0.1}/>
            <ThreeLogoScene modelPath="/models/git_logo/scene.gltf" canvasId="GitCanvas" text="Git" x={2.8} y={2.8} z={1.3}/>
        </div>
    </div>
  )
}

export default Skills