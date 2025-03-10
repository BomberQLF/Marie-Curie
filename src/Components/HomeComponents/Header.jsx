import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();

  return (
    <div>
      <div className="p-12">
        <h1 className="uppercase text-white font-bold text-4xl">Marie Curie</h1>
        <h2 className="text-right font-thin text-white text-lg">
          {t("titre_accueil")}
        </h2>
        <div className="mt-6">
          <div className="border border-white rounded-[22px] px-6 py-2 text-center relative">
            <div>
              <a className="text-white font-thin text-sm" href="#">
                {t("trailer_accueil")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        EMPTY
      </div>
    </div>
  );
};

export default Header;
