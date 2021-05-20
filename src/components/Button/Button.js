import "./Button.scss";

const Button = ({ launchRocket }) => {

  return (
      <button onClick={() => launchRocket()} className="launch-button">Launch Rocket!</button>
  );
};

export default Button;
