import { Instances, Instance } from "@react-three/drei";

const graves = Array.from({length: 32})

function Graveyard() {
  return (
    <Instances castShadow receiveShadow>
      <boxGeometry args={[0.6, 0.8, 0.2]}/>
      <meshStandardMaterial color="#b2b6b1"/>
      {graves.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 4 + Math.random() * 10;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        return <Instance
          castShadow
          key={i}
          position={[x, 0.3, z]}
          rotation-y={(Math.random() - 0.5) * 0.3}
          rotation-z={(Math.random() - 0.5) * 0.2}
        />
      })}
    </Instances>
  )
}

export default Graveyard;
