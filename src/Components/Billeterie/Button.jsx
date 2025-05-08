import { Link } from "react-router-dom";

const Button = ({ to, state, text, disabled, onClick = null }) => {
  if (disabled) {
    return (
      <button
        className="border mt-2 lg:mt-0 lg:ml-6 xl:ml-8 border-gray-500 text-gray-500 px-6 py-2 xl:px-8 xl:py-3 rounded-full cursor-not-allowed opacity-50 lg:text-base xl:text-lg uppercase"
        disabled
        name="disabled-button" // Ajout de name
        aria-label={text} // Ajout d'aria-label
      >
        {text}
      </button>
    );
  } else {
    return (
      <Link
        to={to}
        onClick={onClick}
        state={state}
        className="border mt-2 lg:mt-0 lg:ml-6 xl:ml-8 border-white text-white px-6 py-2 xl:px-8 xl:py-3 rounded-full hover:bg-white hover:text-black transition lg:text-base xl:text-lg uppercase"
        name="link-button" // Ajout de name
        aria-label={text} // Ajout d'aria-label
      >
        {text}
      </Link>
    );
  }
};

export default Button;