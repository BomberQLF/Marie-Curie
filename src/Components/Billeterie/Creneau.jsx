const Creneau = ({ creneaux, onClick, title }) => {
  return (
    <div>
      <h2 className="text-white uppercase my-4 lg:text-2xl lg:mx-6 lg:my-8">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2 justify-evenly mt-2 mb-12 md:mt-16 md:gap-[3.5rem] lg:m-0 creneau">
        {creneaux.map((item, index) => (
          <button
            onClick={() => onClick(item)}
            key={index}
            className="bg-white text-black text-sm py-1 px-6 rounded-2xl hover:bg-gray-200 transition md:text-lg lg:text-2xl lg:py-3 lg:px-8"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Creneau;
