import "./Button.scss";

const Button = ({ launchRocket, flying }) => {

  return (
      <button onClick={() => launchRocket()} className={flying ? "launch-button active" : "launch-button"} disabled={flying}>
        {flying ? "To the Moon!" : "Launch Rocket!"}
        </button>
  );
};

export default Button;
