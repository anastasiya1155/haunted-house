import { wallsHeight } from "./Walls";

export const roofHeight = 1;

function Roof() {
  return (
    <mesh position={[0, wallsHeight + (roofHeight / 2), 0]} rotation-y={Math.PI * 0.25}>
      <coneGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial color="#a34f35" />
    </mesh>
  )
}

export default Roof;
