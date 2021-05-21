import "./Link.scss";

const Link = ({ text, image, handleOpenModal }) => {
  return (
    <div className="link-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="link-card gradient" onClick={() => handleOpenModal()}>
        <p className="link-text">{text}</p>
      </div>
    </div>
  );
};

export default Link;
