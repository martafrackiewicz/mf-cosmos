import { useState } from "react";
import Button from "../Button/Button";
import planet from "../../assets/images/planet.png";
import landingGear from "../../assets/images/landing_gear.png";
import rocket from "../../assets/images/rocket.png";
import smoke1 from "../../assets/images/smoke_1.png";
import smoke2 from "../../assets/images/smoke_2.png";
import "./Illustration.scss";

const Illustration = () => {
  const [flying, setFlying] = useState(false);
  const [bouncing, setBouncing] = useState(true);

  const launchRocket = () => {
    setBouncing(false);
    setFlying(true);
  };

  const landRocket = () => {
    setBouncing(true);
    setFlying(false);
  };

  return (
    <div className="planet-section-wrapper">
      <div className="illustration-wrapper">
        <div
          className={
            flying
              ? "rocket-wrapper flying"
              : bouncing && "rocket-wrapper bouncing"
          }
          onAnimationEnd={() => landRocket()}
        >
          <img src={rocket} className="rocket" alt="rocket"></img>
          <img
            src={landingGear}
            className="landingGear"
            alt="landing_gear"
          ></img>
          <img src={smoke2} className="smoke2" alt="smoke"></img>
          <img src={smoke1} className="smoke1" alt="smoke"></img>
        </div>
        <img src={planet} className="planet" alt="planet"></img>
      </div>
      <Button launchRocket={launchRocket} />
    </div>
  );
};

export default Illustration;
