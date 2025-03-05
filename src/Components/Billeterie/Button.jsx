import { Link } from "react-router-dom";

const Button = ({ to, state, text, disabled }) => {
  return (
    <Link
      to={to}
      state={state}
      className={`uppercase font-semibold rounded-[22px] no-underline transition-all duration-300
        text-sm px-4 py-2 lg:text-lg lg:px-6 lg:py-3
        bg-white text-black hover:bg-gray-100
        ${disabled ? "text-gray-500 cursor-not-allowed bg-gray-300 hover:bg-gray-300" : "text-black"}
      `}
    >
      {text}
    </Link>
  );
};

export default Button;