import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Ground from '../Ground/Ground'

const Showroom = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[255, 255, 255]} attach='background' />

      <spotLight
        color={[1, 0.3, 0.8]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0002}
      />

      <spotLight
        color={[0.25, 0.5, 0.8]}
        intensity={1.8}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0002}
      />

      <Ground />
    </>
  )
}

export default Showroom
