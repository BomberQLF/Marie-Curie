import SmallBox from '/assets/smallBox.svg';
import Circle from '/assets/circleHistoire.svg';
import CliqueCircle from '/assets/cliqueHistoire.svg';
import { Link } from 'react-router-dom';

const SectionHistoire = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-x-hidden">
      <img src={SmallBox} alt="SmallBox" className='absolute bottom-[0] left-[0] h-[150px] md:h-[200px] lg:h-[240px]' />
      <img src={SmallBox} alt="SmallBox" className='absolute top-[-1.3rem] right-[20px] h-[150px] md:h-[200px] md:top-[-1.7rem] lg:h-[240px] lg:top-[-1.9rem] topBox' />
      <div className="p-6 h-[90vh] justify-center w-[85vw] border-[3px] border-white border-solid flex flex-col items-center lg:p-24 xl:p-16 content relative">
        <div className='flex justify-center items-center relative'>
          <img src={Circle} alt="Circle" className='h-[150px] md:h-[250px] lg:h-[350px]' />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className='ml-[5.5rem]'>
                <div className='uppercase text-white text-2xl w-[20rem] md:text-5xl md:w-[30rem] lg:text-7xl lg:w-[50rem]'>Une vie de </div>
                <div className='uppercase text-white text-2xl md:text-5xl lg:text-7xl'>Lumière et d'ombre</div>
            </div>
          </div>
          <div className='absolute bottom-[-8.5rem] right-[1rem] md:bottom-[-11.5rem] lg:right-[2.5rem] lg:bottom-[-12rem] cursor-pointer'>
            <Link to="/histoire">
                <div>
                    <img src={CliqueCircle} alt="" className='h-[60px] md:h-[100px] lg:h-[130px]' />
                </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHistoire;