// filepath: /Users/tommurphy/Documents/MMI/S4/marie-curie/src/Components/HomeComponents/Informations.jsx
import { useTranslation } from "react-i18next";
import Grid from '/assets/aproposGrille.png';

const Informations = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="p-6 h-[90vh] w-[85vw] border-[1px] border-white border-solid flex flex-col items-center lg:p-24 xl:p-16 content relative xl:flex-row xl:justify-between">
        <div className="flex justify-center xl:w-1/2">
          <img src={Grid} alt="Grid" className='md:w-[80%] lg:w-[90%] xl:w-full' />
        </div>
        <div className="mt-6 xl:mt-0 xl:w-1/2 xl:pl-12">
          <p className='text-white font-thin text-sm md:text-xl lg:text-2xl'>
            {t("maria_intro")}
          </p>
          <br />
          <p className='text-white font-thin text-sm md:text-xl lg:text-2xl'>
            {t("maria_legacy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Informations;