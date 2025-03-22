import { useState } from "react";
import { useTranslation } from "react-i18next";
import EtiquetteHistoire from "./EtiquetteHistoire";
import Clique from '/assets/cliqueHistoire.svg';
import ArrowDown from "/assets/arrowDown.svg";
import { Link } from "react-router-dom";

const Histoire = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState("01");

  const handleCounter = () => {
    setCounter((prev) => {
      let newCount = Number(prev) + 1;
      if (newCount > 5) {
        newCount = 1;
      }
      return String(newCount).padStart(2, "0");
    });
  };

  const dataHistoire = [
    {
      title: t("histoire_title_01"),
      num: "01",
      text: t("histoire_text_01"),
      img: "/assets/05.jpg",
    },
    {
      title: t("histoire_title_02"),
      num: "02",
      text: t("histoire_text_02"),
      img: "/assets/04.jpg",
    },
    {
      title: t("histoire_title_03"),
      num: "03",
      text: t("histoire_text_03"),
      img: "/assets/03.jpg",
    },
    {
      title: t("histoire_title_04"),
      num: "04",
      text: t("histoire_text_04"),
      img: "/assets/01.jpg",
    },
    {
      title: t("histoire_title_05"),
      num: "05",
      text: t("histoire_text_05"),
      img: "/assets/02.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-6 lg:p-24 mt-20 relative">
        <div className="pb-10 border-b w-full lg:w-[35%] border-white border-solid">
          <div className="text-white w-fit text-3xl lg:text-5xl font-thin">{t("experience")}</div>
          <div className="text-white w-fit text-3xl lg:text-5xl font-thin">{t("immersive")}</div>
        </div>
        <div>
          <p className="text-white font-thin mt-12 max-w-full lg:max-w-[80%] lg:mb-12">{t("histoire_intro")}</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 lg:mt-0">
          <Link to="/#histoire">
            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition mb-4 lg:mb-0">
              {t("back")}
            </button>
          </Link>
          <Link to="/gallery">
            <button className="border mt-4 lg:mt-0 lg:ml-10 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              {t("discover_exhibition")}
            </button>
          </Link>
        </div>
        <img
          onClick={handleCounter}
          src={Clique}
          alt="Cliquer pour voir l'étape suivante"
          className="hidden lg:block absolute top-[50%] right-[-10%] cursor-pointer z-10"
        />
        <img
          onClick={handleCounter}
          src={ArrowDown}
          alt="Cliquer pour voir l'étape suivante"
          className="block lg:hidden absolute top-[80%] right-[10%] cursor-pointer z-10"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <EtiquetteHistoire data={dataHistoire} num={counter} />
      </div>
    </div>
  );
};

export default Histoire;