import "./Link.scss";
import { gradient } from "../../../scss/_colors.scss";

const Link = ({ text, image }) => {
  return (
      <div className="link-card"
        style={{backgroundImage: `${gradient}, url(${image})`}}>
        <p className="link-text">{text}</p>
      </div>
  );
};

export default Link;
