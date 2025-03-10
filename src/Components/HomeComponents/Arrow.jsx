import Arrow from "../../../public/assets/arrow_accueil.svg";
import { useTranslation } from "react-i18next";

const ArrowComp = () => {
  const { t } = useTranslation();

  return (
    <>
      <img
        className="absolute right-[35px] bottom-[2rem] h-[200px] cursor-pointer"
        src={Arrow}
        alt={Arrow}
      />
      <span className="absolute uppercase right-[-27px] bottom-[8.8rem] text-white arrow_accueil text-xs cursor-pointer">
        {t("arrow_text")}
      </span>
    </>
  );
};

export default ArrowComp;
