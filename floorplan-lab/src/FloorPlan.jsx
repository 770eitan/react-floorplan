import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";


const FloorPlan = (props) => {
  
  return ( 
    <>
      <div>
      <Kitchen/>
      <LivingRoom/>
      <Bedroom bedNum='2'/>
      <Bath/>
      <Bedroom bedNum='1'/>
      <Bedroom bedNum='3'/>
      </div>
    </>
    
  );
}

export default FloorPlan