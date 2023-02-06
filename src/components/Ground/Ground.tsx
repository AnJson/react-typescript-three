import { MeshReflectorMaterial } from '@react-three/drei'
import React from 'react'

const Ground = () => {
  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial
          mirror={0}
          envMapIntensity={0}
          dithering
          color={[0.1, 0.1, 0.1]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          reflectorOffset={0.2}
        />
      </mesh>
    </>
  )
}

export default Ground
