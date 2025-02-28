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
      <div className="flex flex-wrap gap-2 justify-evenly mt-2 mb-12 md:mt-16 md:gap-[3.5rem] lg:m-0 creneau">
        {creneaux.map((item, index) => (
          <button
            onClick={() => handleClick(item)}
            key={index}
            className={`text-black text-sm py-1 px-6 rounded-2xl hover:bg-[#70A666] transition md:text-lg lg:text-2xl lg:py-3 lg:px-8 
              ${selectedCreneau === item ? "bg-[#70BA6C] text-white" : "bg-white text-black"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Creneau;