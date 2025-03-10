import Grid from '../../../public/assets/aproposGrille.png';

const Informations = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="p-6 h-[90vh] w-[85vw] border-[1px] border-white border-solid flex flex-col items-center lg:p-24 xl:p-16 content relative xl:flex-row xl:justify-between">
        <div className="flex justify-center xl:w-1/2">
          <img src={Grid} alt="Grid" className='md:w-[80%] lg:w-[90%] xl:w-full' />
        </div>
        <div className="mt-6 xl:mt-0 xl:w-1/2 xl:pl-12">
          <p className='text-white font-thin text-sm md:text-xl lg:text-2xl'>
            Maria Skłodowska, connue plus tard sous le nom de Marie Curie, était une scientifique franco-polonaise qui a révolutionné l’étude de la radioactivité.
          </p>
          <br />
          <p className='text-white font-thin text-sm md:text-xl lg:text-2xl'>
            Ses recherches ont été fondamentales pour la médecine et la physique moderne. Malgré les défis liés à sa condition de femme scientifique à son époque, Maria Skłodowska a laissé un héritage scientifique exceptionnel qui inspire encore aujourd’hui.
          </p>
        </div>
        <div>
          {/* FOOTER ICI */}
        </div>
      </div>
    </div>
  );
};

export default Informations;