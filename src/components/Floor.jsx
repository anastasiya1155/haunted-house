import { useLayoutEffect } from "react";
import * as THREE from 'three'
import { useTexture } from "@react-three/drei";
import colorTexture from '../textures/grass/color.jpeg'
import normalTexture from '../textures/grass/normal.jpeg'
import aoMapTexture from '../textures/grass/ambientOcclusion.jpeg'
import roughnessTexture from '../textures/grass/roughness.jpeg'
import heightTexture from '../textures/grass/height.png'

function Floor() {
  const textureProps = useTexture({
    map: colorTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoMapTexture,
    displacementMap: heightTexture,
  });

  useLayoutEffect(() => {
    Object.values(textureProps).forEach((texture) => {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(8, 8)
    })
  }, [textureProps])

  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial {...textureProps} />
    </mesh>
  )
}

export default Floor;
