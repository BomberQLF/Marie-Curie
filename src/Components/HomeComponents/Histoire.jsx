import { useState } from "react";
import EtiquetteHistoire from "./EtiquetteHistoire";
import Clique from '/assets/cliqueHistoire.svg';
import { Link } from "react-router-dom";

const Histoire = () => {
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
      title: "Marie Curie : Un voyage vers l'inconnu",
      num: "01",
      text: "Marie Curie déterminée à devenir scientifique, quitte sa Pologne natale pour Paris, prête à tout sacrifier pour étudier à la Sorbonne. Découvrez son voyage audacieux qui a marqué le début de son incroyable parcours vers l'inconnu.",
      img: "/assets/01.png",
    },
    {
      title: "Radioactivité : Entre promesses et périls",
      num: "02",
      text: "À la fin du XIXᵉ siècle, la découverte de la radioactivité par Pierre et Marie Curie révolutionne la science, entre promesses médicales et dangers éthiques. Une avancée qui transforme le monde.Découvrez comment cette découverte a transformé le monde, entre progrès médicaux et défis éthiques majeurs.",
      img: "/assets/02.png",
    },
    {
      title: "Deux Prix Nobel, mille obstacles : Le combat de Marie Curie",
      num: "03",
      text: "La première femme à recevoir un Prix Nobel a défié son époque pour voir son génie reconnu. Découvrez comment ses découvertes ont révolutionné la science tout en luttant contre les préjugés d’un monde scientifique dominé par les hommes.",
      img: "/assets/03.png",
    },
    {
      title: "Les Petites Curies : La science au secours des blessés",
      num: "04",
      text: `La pionnière de la science, aux côtés de sa fille Irène, transforme la radiologie en une arme de sauvetage pendant la guerre. Découvrez comment les "Petites Curies" ont révolutionné la médecine de guerre, apportant science et espoir au cœur des zones de combat.`,
      img: "/assets/04.png",
    },
    {
      title: "Au prix de la science : Le sacrifice de Marie Curie",
      num: "05",
      text: "La grande scientifique meurt des suites d’une maladie liée à son exposition aux radiations. Découvrez comment sa quête de la science, au péril de sa santé, l'a conduite à cette fin tragique.",
      img: "/assets/05.png",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-24 mt-20 relative">
        <div className="pb-10 border-b w-[35%] border-white border-solid">
          <div className="text-white w-fit text-5xl font-thin">Une expérience</div>
          <div className="text-white w-fit text-5xl font-thin">immersive</div>
        </div>
        <div>
          <p className="text-white font-thin mt-12">Bienvenue dans l’exposition Marie Curie, Une vie de lumière et d'ombre. Vous vous apprêtez à vivre une expérience immersive qui vous plonge au cœur des moments décisifs de la vie de Marie Curie. À travers une série de tableaux représentant chaque étape clé de son parcours, vous découvrirez ses découverte s scientifiques majeures, ses luttes personnelles et son engagement indéfectible. Cette exposition vous offre un voyage visuel et émotionnel, où chaque tableau raconte une facette de l’histoire de cette figure emblématique, qui a profondément marqué l’histoire de la science et de l'humanité.</p>
        </div>
        <div>
          <Link to="/">
            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Revenir en arrière
            </button>
          </Link>
          <Link to="/gallery">
            <button className="border mt-14 ml-10 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Découvrir l’exposition
            </button>
          </Link>
        </div>
        <img onClick={handleCounter} src={Clique} alt="" className="absolute top-[50%] right-[-10%] cursor-pointer" />
      </div>
      <div className="w-1/2">
        <EtiquetteHistoire data={dataHistoire} num={counter} />
      </div>
    </div>
  );
};

export default Histoire;