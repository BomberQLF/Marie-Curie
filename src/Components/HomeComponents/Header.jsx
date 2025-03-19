import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="p-12">
        <h1 className="uppercase text-white font-bold text-4xl sm:ml-[10rem] md:text-6xl md:ml-[10rem] lg:ml-[14rem] xl:text-8xl xl:text-center xl:m-0 xl:tracking-wide"><span>Marie</span> Curie</h1>
        <h2 className="text-right font-thin text-white text-lg sm:mr-[10rem] md:text-2xl md:mr-[6rem] lg:mr-32 lg:mr-[20rem] lg:text-3xl xl:mr-[25rem] xl:text-4xl">
          {t("titre_accueil")}
        </h2>
        <div className="mt-6">
          <div className="absolute bottom-[50px] left-[50%] btn-trailer">
            <div className="border border-white rounded-[22px] px-[0.75rem] py-2 text-center md:m-auto md:max-w-[350px] lg:max-w-[390px] bg-white">
              <div>
                <a className="font-thin md:text-lg lg:text-xl text-black lg:px-[6.5rem] lg:py-[1rem]" href="#">
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
