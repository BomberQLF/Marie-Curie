const EtiquetteHistoire = ({ data, num }) => {
    const currentData = data.find(item => item.num === num);
  
    if (!currentData) {
      return <div className="p-6 text-white">Données non trouvées pour le numéro {num}</div>;
    }
  
    return (
      <div
        className="w-full h-full bg-cover bg-center flex items-end p-10"
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