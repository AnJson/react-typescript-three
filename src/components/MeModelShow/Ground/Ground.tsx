import { useTexture } from '@react-three/drei'
import React from 'react'

const Ground = (props: JSX.IntrinsicElements['mesh']) => {
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
      <mesh {...props}>
        <planeGeometry args={[50, 50]} />
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
