import "./Link.scss";

const Link = ({ text, type, image, handleOpenModal }) => {
  return (
    <div className="link-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="link-card gradient" onClick={() => handleOpenModal(type)}>
        <p className="link-text">{text}</p>
      </div>
    </div>
  );
};

export default Link;
