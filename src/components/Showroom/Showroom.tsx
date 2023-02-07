import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Ground from '../Ground/Ground'
import { Me } from '../Me/Me'

const Showroom = () => {
  return (
    <>
      <color args={[0, 0, 0]} attach='background' />
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[10, 0, 35]}
      />
      <directionalLight intensity={1} castShadow position={[-10, 3, 12]} />
      <Me
        position={[0, -9, 0]}
        scale={6}
      />
      <Ground />
    </>
  )
}

export default Showroom
