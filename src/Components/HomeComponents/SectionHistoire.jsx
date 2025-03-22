import { useTranslation } from "react-i18next";
import SmallBox from '/assets/smallBox.svg';
import Circle from '/assets/circleHistoire.svg';
import CliqueCircle from '/assets/decouvreCircle.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionHistoire = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(".sectionHistoire", 
      { scale: 1.2 }, 
      { 
        scale: .85, 
        scrollTrigger: {
          trigger: ".sectionHistoire",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".sectionHistoire h3", 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionHistoire",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".sectionHistoire img", 
      { x: -100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionHistoire",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".sectionHistoire p", 
      { x: 100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionHistoire",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-x-hidden sectionHistoire">
      <img src={SmallBox} alt="SmallBox" className='absolute bottom-[0] left-[30px] h-[150px] md:h-[200px] lg:h-[240px] bottomBox' />
      <img src={SmallBox} alt="SmallBox" className='absolute top-[-1.3rem] right-[20px] h-[150px] md:h-[200px] md:top-[-1.7rem] lg:h-[240px] lg:top-[2.1rem] topBox' />
      <div className="p-6 h-[90vh] justify-center w-[85vw] border-[3px] border-white border-solid flex flex-col items-center lg:p-24 xl:p-16 content relative">
        <div className='flex justify-center items-center relative'>
          <img src={Circle} alt="Circle" className='h-[150px] md:h-[250px] lg:h-[350px]' />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className='ml-[5.5rem]'>
              <div className='uppercase text-white text-2xl w-[20rem] md:text-5xl md:w-[30rem] lg:text-7xl lg:w-[50rem]'>{t("life_of")}</div>
              <div className='uppercase text-white text-2xl md:text-5xl lg:text-7xl'>{t("light_and_shadow")}</div>
            </div>
          </div>
          <div className='absolute bottom-[-8.5rem] right-[1rem] md:bottom-[-11.5rem] lg:right-[2.5rem] lg:bottom-[-12rem] cursor-pointer'>
            <Link to="/histoire">
              <div>
                <img src={CliqueCircle} alt="" className='h-[60px] md:h-[100px] lg:h-[130px] cliqueCircle' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHistoire;