import Arrow from "/assets/arrow_accueil.svg";
import { useTranslation } from "react-i18next";

const ArrowComp = () => {
  const { t } = useTranslation();

  return (
    <div onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
      <img
        className="absolute right-[35px] bottom-[2rem] h-[200px] cursor-pointer md:h-[260px] lg:h-[320px] lg:right-[42px]"
        src={Arrow}
        alt={Arrow}
      />
      <span className="absolute uppercase right-[-27px] bottom-[8.8rem] text-white arrow_accueil text-xs cursor-pointer md:text-lg md:right-[-3.5rem] md:bottom-[10.8rem] lg:text-2xl lg:right-[-5rem] lg:bottom-[13rem]">
        {t("arrow_text")}
      </span>
    </div>
  );
};

export default ArrowComp;
