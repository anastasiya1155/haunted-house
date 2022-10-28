import { wallsDepth } from "./Walls";
import { useTexture } from "@react-three/drei";
import colorTexture from '../../textures/door/color.jpg'
import opacityTexture from '../../textures/door/alpha.jpg'
import aoMapTexture from '../../textures/door/ambientOcclusion.jpg'
import normalTexture from '../../textures/door/normal.jpg'
import displacementTexture from '../../textures/door/height.jpg'
import metalnessTexture from '../../textures/door/metalness.jpg'
import roughnessTexture from '../../textures/door/roughness.jpg'

function Door() {
  const textureProps = useTexture({
    map: colorTexture,
    alphaMap: opacityTexture,
    normalMap: normalTexture,
    metalnessMap: metalnessTexture,
    roughnessMap: roughnessTexture,
    displacementMap: displacementTexture,
    aoMap: aoMapTexture,
  })
  return (
    <mesh position={[0, 0.93, wallsDepth / 2 + 0.01]}>
      <planeGeometry args={[2, 2]}/>
      <meshStandardMaterial transparent displacementScale={0.15} {...textureProps} />
    </mesh>
  )
}

export default Door;
