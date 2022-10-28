import { Instance, Instances } from "@react-three/drei";

const bushes = [
  [0.5, 0.8, 0.2, 2.2],
  [0.25, 1.4, 0.1, 2.1],
  [0.4, -0.8, 0.1, 2.2],
  [0.15, -1, 0.05, 2.6],
]

function Bushes() {
  return (
    <Instances castShadow receiveShadow>
      <sphereGeometry args={[1, 16, 16]}/>
      <meshPhysicalMaterial color='#89c894' />
      {bushes.map(([scale, x, y, z], i) => (
        <Instance position={[x, y, z]} scale={scale} key={i} />
      ))}
    </Instances>
  )
}

export default Bushes;
