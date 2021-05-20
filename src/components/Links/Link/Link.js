import "./Link.scss";

const Link = ({ text, image }) => {
  
  return (
    <div className="link-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="link-card gradient">
        <p className="link-text">{text}</p>
      </div>
    </div>
  );
};

export default Link;
