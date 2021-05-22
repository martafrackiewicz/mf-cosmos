import Link from "./Link/Link";
import { cards } from "../cards";
import "./Links.scss";

const Links = ({ handleOpenModal }) => {

  return (
    <div className="links_wrapper">
      {Object.entries(cards).map(([key, card]) => {
        return (
            <Link
              key={key}
              text={card.cardTitle}
              type={card.type}
              image={card.image}
              handleOpenModal={handleOpenModal}
            />
        );
      })}
    </div>
  );
};

export default Links;
