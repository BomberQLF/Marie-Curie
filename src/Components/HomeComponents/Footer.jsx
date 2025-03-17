import LogoVisiorama from "/assets/visiorama.svg";
import Facebook from "/assets/Facebook.svg";
import Instagram from "/assets/Instagram.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-24">
      <div className="flex flex-col items-center md:items-start gap-6 w-full">
        <img
          src={LogoVisiorama}
          alt="Logo Visiorama"
          className="w-[200px] md:w-[300px] lg:w-[400px]"
        />

        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          <div className="flex flex-col md:items-start">
            <div className="flex gap-4">
              <img src={Instagram} alt="Instagram" className="h-[40px] md:h-[50px] cursor-pointer" />
              <img src={Facebook} alt="Facebook" className="h-[40px] md:h-[50px] cursor-pointer" />
            </div>
            <p className="text-gray-300 mt-2">visiorama/agence.com</p>
          </div>

          <div className="flex flex-col md:items-start">
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400">{t("legal_mentions")}</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-400">{t("terms_conditions")}</a>
            </div>
            <p className="text-gray-500 mt-2">{t("all_rights_reserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;