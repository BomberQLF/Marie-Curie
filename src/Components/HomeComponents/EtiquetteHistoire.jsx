import { useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const EtiquetteHistoire = ({ data, num }) => {
  const currentData = data.find((item) => item.num === num);

  const location = useLocation();
  useEffect(() => {
    gsap.fromTo(".etiquette", { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
  }, [location]);

  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex items-end z-0 p-10 etiquette relative"
      style={{ backgroundImage: `url(${currentData.img})` }}
    >
      <div className="bg-black p-8 rounded-lg max-w-2xl text-white relative">
        <h2 className="text-2xl mb-2 font-semibold">{currentData.title}</h2>
        <p className="text-md mt-4 leading-relaxed">{currentData.text}</p>
        <span className="absolute text-7xl top-[-3rem]">{num}</span>
      </div>
    </div>
  );
};

export default EtiquetteHistoire;
