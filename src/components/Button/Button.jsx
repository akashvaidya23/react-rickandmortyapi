const Button = ({ text, clickHandler }) => {
  return (
    <button className="btn btn-outline-primary" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
