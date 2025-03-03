import { Link } from "react-router-dom";

const Button = ({ to, state, text, disabled }) => {
  return (
    <Link
      to={to}
      state={state}
      className={`uppercase text-2xl underline px-8 py-4 bg-white rounded-[22px] text-black no-underline lg:text-lg ${
        disabled ? "text-gray-500 cursor-not-allowed" : "text-black"
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;