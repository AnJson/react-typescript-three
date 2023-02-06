import React, { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './components/utils/Loader/LoadingScreen/LoadingScreen'

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Canvas shadows />
    </Suspense>
  )
}

export default App
