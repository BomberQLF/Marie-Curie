import { Link } from "react-router-dom";
import Logo from "../../../public/assets/logo.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [frClicked, setFrClicked] = useState(true);
  const [enClicked, setEnClicked] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = (e) => {
    if (e.target.innerHTML === "EN") {
      setEnClicked(true);
      setFrClicked(false);
    } else {
      setFrClicked(true);
      setEnClicked(false);
    }
  };

  return (
    <nav className="p-6 md:p-10 lg:px-32">
      <ul className="flex justify-between">
        <div>
          <Link to={"/"}>
            <img
              className="max-w-[70%] md:max-w-[80%] lg:max-w-[100%]"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex space-x-6 items-center gap-4 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="text-white font-thin md:text-xl lg:text-2xl"
              to={"/billeterie/"}
            >
              {t("billeterie")}
            </Link>
          </li>
          <li>
            <div className="flex space-x-4 border border-white rounded-[22px] overflow-hidden">
              <button 
                className={`px-4 py-2 border-none ${frClicked ? "bg-white text-black" : "text-white"}`} 
                onClick={(e) => {
                  changeLanguage("fr");
                  handleClick(e);
                }}
              >
                FR
              </button>
              <button 
                className={`px-4 py-2 border-rounded-[22px] ${enClicked ? "bg-white text-black" : "text-white"}`} 
                onClick={(e) => {
                  changeLanguage("en");
                  handleClick(e);
                }}
              >
                EN
              </button>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;