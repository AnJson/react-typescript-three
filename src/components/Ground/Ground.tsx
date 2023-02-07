import { useTexture } from '@react-three/drei'
import React from 'react'

const Ground = () => {
  const [normal, rough] = useTexture([
    `${process.env.PUBLIC_URL}textures/cobblestone_floor_normal.jpg`,
    `${process.env.PUBLIC_URL}textures/cobblestone_floor_rough.png`
  ])

  /* useEffect(() => {
    [rough, normal].forEach((texture) => {
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      texture.repeat.set(5, 5)
      texture.encoding = LinearEncoding
    })
  }, [rough, normal]) */

  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshLambertMaterial
          map={normal}
          normalMap={normal}
          alphaMap={rough}
        />
      </mesh>
    </>
  )
}

export default Ground
