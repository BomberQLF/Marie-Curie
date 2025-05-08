import { useState, useEffect } from "react";

const Creneau = ({ creneaux, onClick, title, reset }) => {
  const [selectedCreneau, setSelectedCreneau] = useState(localStorage.getItem("selectedCreneau") || null);

  useEffect(() => {
    if (reset) {
      setSelectedCreneau(null);
      localStorage.removeItem("selectedCreneau");
    }
  }, [reset]);

  const handleClick = (item) => {
    setSelectedCreneau(item);
    localStorage.setItem("selectedCreneau", item);
    onClick(item);
  };

  return (
    <div>
      <h2 className="text-white uppercase my-4 lg:text-2xl lg:mx-6 lg:my-8">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-2 md:mt-16 lg:mt-8 creneau">
        {creneaux.map((item, index) => (
        <button
          onClick={() => handleClick(item)}
          key={index}
          name={`creneau-${index}`} // Ajout de name
          aria-label={`Sélectionner le créneau ${item}`} // Ajout d'aria-label
          className={`text-black text-xs py-1 px-2 rounded-lg hover:bg-[#70A666] transition md:text-sm lg:text-base
            ${selectedCreneau === item ? "bg-[#70BA6C] text-white" : "bg-white text-black"} w-24 md:w-28`} 
        >
          {item}
        </button>
        ))}
      </div>
    </div>
  );
};

export default Creneau;