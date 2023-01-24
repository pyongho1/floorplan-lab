import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <div>
      FloorPlan
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={[1, 2, 3]}/>
      <Bath size={"Full"} />
      <Bath size={"Half"} />
    </div>
  );
};

export default FloorPlan;
