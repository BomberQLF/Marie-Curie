import { Link } from "react-router-dom";

const Button = ({ to, state, text, disabled }) => {
  return (
    <Link
      to={to}
      state={state}
      className={`uppercase text-white text-lg underline lg:text-3xl md:text-lg lg:text-2xl lg:py-3 lg:px-8
        ${disabled ? "text-gray" : "text-white"}"
      `}
    >
      {text}
    </Link>
  );
};

export default Button;