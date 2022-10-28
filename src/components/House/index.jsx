import Walls from "./Walls";
import Roof from "./Roof";
import Door from "./Door";
import Bushes from "./Bushes";
import DoorLight from "./DoorLight";

function House(props) {
  return (
    <group {...props}>
      <Roof/>
      <Walls/>
      <Door/>
      <DoorLight/>
      <Bushes/>
    </group>
  )
}

export default House
