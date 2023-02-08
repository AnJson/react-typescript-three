import React, { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './components/utils/LoadingScreen/LoadingScreen'
import MeModelShow from './components/MeModelShow/MeModelShow'

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Canvas shadows>
        <MeModelShow />
      </Canvas>
    </Suspense>
  )
}

export default App
