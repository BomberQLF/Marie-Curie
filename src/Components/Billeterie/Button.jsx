import { Link } from "react-router-dom";

const Button = ({ to, state, text, disabled, onClick = null }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      state={state}
      className={`border mt-4 lg:mt-0 lg:ml-10 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition lg:text-2xl uppercase
        ${disabled ? "text-gray" : "text-white"}"
      `}
    >
      {text}
    </Link>
  );
};

export default Button;