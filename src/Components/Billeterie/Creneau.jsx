const Creneau = ({ creneaux }) => {
    return (
        <div className="flex flex-wrap gap-2 justify-evenly mt-12 mb-12 md:mt-16 md:gap-[3.5rem] creneau">
            {creneaux.map((item, index) => (
                <button 
                    key={index} 
                    className="bg-white text-black text-sm py-1 px-6 rounded-2xl hover:bg-gray-200 transition md:text-lg lg:text-2xl lg:py-3 lg:px-8"
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Creneau;