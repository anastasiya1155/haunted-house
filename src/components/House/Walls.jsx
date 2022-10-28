import { useTexture } from "@react-three/drei";
import colorTexture from '../../textures/bricks/color.jpg'
import roughtnessTexture from '../../textures/bricks/roughness.jpg'
import normalTexture from '../../textures/bricks/normal.jpg'
import aoMapTexture from '../../textures/bricks/ambientOcclusion.jpg'

export const wallsHeight = 2.5;
export const wallsDepth = 4;

function Walls() {
  const textureProps = useTexture({
    map: colorTexture,
    normalMap: normalTexture,
    roughnessMap: roughtnessTexture,
    aoMap: aoMapTexture,
  })
  return (
    <mesh castShadow receiveShadow position={[0, 1.25, 0]}>
      <boxGeometry args={[4, wallsHeight, wallsDepth]} />
      <meshStandardMaterial {...textureProps} />
    </mesh>
  )
}

export default Walls;
