import React, { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './components/utils/LoadingScreen/LoadingScreen'
import Showroom from './components/Showroom/Showroom'

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Canvas shadows>
        <Showroom />
      </Canvas>
    </Suspense>
  )
}

export default App
