import { useTranslation } from "react-i18next";
import Statue from "../Statue/Statue";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="p-12">
        <h1 className="uppercase text-white font-bold text-4xl md:text-6xl md:ml-14 lg:ml-32 xl:text-8xl xl:text-center xl:m-0 xl:tracking-wide"><span>Marie</span> Curie</h1>
        <h2 className="text-right font-thin text-white text-lg md:text-2xl md:mr-16 lg:mr-32 lg:text-3xl xl:mr-[20rem] xl:text-4xl">
          {t("titre_accueil")}
        </h2>
        <div className="mt-6">
          <div>
            <div className="border border-white rounded-[22px] px-6 py-2 text-center md:m-auto md:max-w-[350px] lg:max-w-[430px]  hover:bg-white">
              <div>
                <a className="text-white font-thin text-sm md:text-lg lg:text-xl hover:text-black lg:px-[6.5rem] lg:py-[1rem]" href="#">
                  {t("trailer_accueil")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
