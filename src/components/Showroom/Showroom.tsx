import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Ground from '../Ground/Ground'

const Showroom = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[10, 10, 25]} />
      <color args={[0, 0, 0]} attach='background' />

      <pointLight power={15} castShadow position={[10, 3, 37]} />
      <spotLight
        color={[0.5, 0.3, 0.6]}
        intensity={0.5}
        angle={0.6}
        penumbra={0.5}
        position={[35, 15, 0]}
        castShadow
        shadow-bias={-0.0002}
      />

      <Ground />
    </>
  )
}

export default Showroom
