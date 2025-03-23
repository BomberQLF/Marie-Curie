import { useTranslation } from "react-i18next";

const Recap = ({ date, time, counterNormal, counterEtudiant, name, lastname, totalPrice }) => {
    const { t } = useTranslation();

    return (
      <div className="grid border border-[.5px] border-white">
        <div className="p-4 text-white">
          <p className="w-max text-sm md:text-lg lg:text-xl">{`${name} ${lastname?.toUpperCase()}`}</p>
        </div>
        <div className="p-4 text-white time dv">
            <span className="font-thin text-sm md:text-lg lg:text-xl">{date}</span>
            <p className="text-sm md:text-lg lg:text-xl">{time}</p>
        </div>
        <div className="p-4 text-white expo dv">
            <span className="font-thin text-sm md:text-lg lg:text-xl">{t("expo_title")}</span>
            <p className="text-sm md:text-lg lg:text-xl">{t("expo_subtitle")}</p>
        </div>
        <div className="p-4 text-white tarif">
            <div className="flex justify-between">
                <div className="text-sm md:text-lg lg:text-xl">{t("tarif_normal_resume")}</div>
                <div className="text-sm md:text-lg lg:text-xl">{`x${counterNormal}`}</div>
            </div>
            <div className="flex justify-between">
                <div className="text-sm md:text-lg lg:text-xl">{t("tarif_etudiant_resume")}</div>
                <div className="text-sm md:text-lg lg:text-xl">{`x${counterEtudiant}`}</div>
            </div>
        </div>
        <div className="p-4 text-white total">
            <div className="flex justify-between">
                <div className="text-sm md:text-lg lg:text-xl">TOTAL</div>
                <div className="font-bold text-sm md:text-lg lg:text-xl">{`${totalPrice} euros`}</div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Recap;