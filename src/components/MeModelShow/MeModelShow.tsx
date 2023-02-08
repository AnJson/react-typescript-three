import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import React from 'react'
import Ground from './Ground/Ground'
import { MeModel } from './MeModel/MeModel'
import Sphere from './Sphere/Sphere'

const MeModelShow = () => {
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
        intensity={3}
        castShadow
        position={[-12, 10, 10]}
        color='#fda'
      />
      <Sphere
        position={[-10, 8, 10]}
        castShadow
        scale={20}
      />
      <Sphere
        position={[-10, 15, -35]}
        castShadow
        scale={20}
      />
      <Sphere
        position={[40, 20, -8]}
        castShadow
        scale={20}
      />
      <MeModel position={[0, -8, 0]} />
      <Ground
        position={[0, -8, 0]}
        rotation-x={-Math.PI * 0.5}
        receiveShadow
      />
      <Stars />
    </>
  )
}

export default MeModelShow
