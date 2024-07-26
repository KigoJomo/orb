import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import SphereModel from "../public/Sphere";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <SphereModel />
        </Suspense>
        <Environment preset='night' />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={1} far={10} resolution={256} color={'#000000'} />
      </Canvas>
    </>
  )
}

export default App
