import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Ground from '../Ground/Ground'
import { MeModel } from '../Me/MeModel'
import Sphere from '../Sphere/Sphere'

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
      <ambientLight intensity={0.1} />
      <directionalLight
        intensity={1.6}
        castShadow
        position={[-12, 10, 10]}
        color='#fda'
      />
      <Sphere
        position={[-10, 8, 10]}
        castShadow
        scale={20}
      />
      <MeModel position={[0, -8, 0]} />
      <Ground
        position={[0, -8, 0]}
        rotation-x={-Math.PI * 0.5}
        receiveShadow
      />
    </>
  )
}

export default Showroom
