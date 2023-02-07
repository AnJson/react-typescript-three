import React from 'react'

const Sphere = (props: JSX.IntrinsicElements['mesh']) => {
  return (
    <>
      <mesh
        {...props}
      >
        <sphereGeometry args={[0.2, 30, 30]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </>
  )
}

export default Sphere
