import { Link } from "react-router-dom";
import Logo from '../../../public/assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="p-6 md:p-10 lg:px-32">
      <ul className="flex justify-between">
        <div>
          <Link to={"/"}>
            <img className="max-w-[70%] md:max-w-[80%] lg:max-w-[100%]" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex space-x-6 items-center gap-4 md:gap-8 lg:gap-12">
          <li>
            <Link className="text-white font-thin md:text-xl lg:text-2xl" to={"/billeterie/"}>Billeterie</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
