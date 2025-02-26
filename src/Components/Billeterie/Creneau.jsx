import { useState } from "react";

const Creneau = ({ creneaux, onClick, title }) => {
  const [selectedCreneau, setSelectedCreneau] = useState(null);

  const handleClick = (item) => {
    setSelectedCreneau(item);
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
            className={`text-black text-sm py-1 px-6 rounded-2xl hover:bg-gray-500 transition md:text-lg lg:text-2xl lg:py-3 lg:px-8 
              ${selectedCreneau === item ? "bg-transparent text-white" : "bg-gray-200 text-black"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Creneau;