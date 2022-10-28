import { useControls } from "leva";

function DoorLight() {
  const { distance, intensity, color } = useControls('door light', {
    intensity: 1.7,
    distance: 3,
    color: '#ffa346'
  })

  return (
    <pointLight args={[color, intensity, distance]} position={[0, 2.2, 2.7]} castShadow />
  )
}

export default DoorLight;
