import Link from "./Link/Link";
import "./Links.scss";
import capsules from "../../assets/images/capsules.png";
import crew from "../../assets/images/crew.png";
import rockets from "../../assets/images/rockets.png";
import details from "../../assets/images/details.png";

const Links = ({ handleOpenModal }) => {
  return (
    <div className="links_wrapper">
      <Link
        text="Capsules"
        image={capsules}
        handleOpenModal={handleOpenModal}
      />
      <Link text="Crew" image={crew} />
      <Link text="Rockets" image={rockets} />
      <Link text="Details" image={details} />
    </div>
  );
};

export default Links;
