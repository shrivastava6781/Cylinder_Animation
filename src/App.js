import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Cyl from "./Cyl"
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const App = () => {

  return (
    <Canvas flat camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
        mipmapBlur
          intensity={12.0} // The bloom intensity.
          luminanceThreshold={0.23} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.04} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ToneMapping adaptive/>
      </EffectComposer>
    </Canvas>
  )
}

export default App
