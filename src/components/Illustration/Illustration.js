import planet from "../../assets/images/planet.png";
import landingGear from "../../assets/images/landing_gear.png";
import rocket from "../../assets/images/rocket.png";
import smoke1 from "../../assets/images/smoke_1.png";
import smoke2 from "../../assets/images/smoke_2.png";
import "./Illustration.scss";

const Illustration = () => {
  return (
    <div className="illustration-wrapper">
      <div className="rocket-wrapper">
        <img src={rocket} className="rocket" alt="rocket"></img>
        <img src={landingGear} className="landingGear" alt="landing_gear"></img>
        <img src={smoke2} className="smoke2" alt="smoke"></img>
        <img src={smoke1} className="smoke1" alt="smoke"></img>
      </div>
      <img src={planet} className="planet" alt="planet"></img>
    </div>
  );
};

export default Illustration;
