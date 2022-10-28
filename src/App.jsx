import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import House from "./components/House";
import Floor from "./components/Floor";
import Graveyard from "./components/Graveyard";
import Fog from "./components/Fog";
import Ghosts from "./components/Ghosts";

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 15] }}>
      <OrbitControls maxPolarAngle={Math.PI * 0.49} minDistance={5} maxDistance={20} makeDefault />
      <ambientLight intensity={0.12} color="#b9d5ff" />
      <directionalLight color="#b9d5ff" castShadow intensity={0.22} />
      <Fog />
      <Suspense fallback={null}>
        <House />
        <Graveyard/>
        <Ghosts />
        <Floor />
      </Suspense>
    </Canvas>
  )
}
