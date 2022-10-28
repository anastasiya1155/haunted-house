import React from "react";
import { useControls } from "leva";

function Fog() {
  const { color, near, far } = useControls('fog', {
    color: '#375873',
    near: { min: 1, value: 1 },
    far: { min: 10, value: 25 },
  })
  return (
    <>
      <fog args={[color, near, far]} attach="fog"/>
      <color attach="background" args={[color]} />
    </>
  )
}

export default Fog;
