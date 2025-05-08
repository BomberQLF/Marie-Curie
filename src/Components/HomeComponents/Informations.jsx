import { useTranslation } from "react-i18next";
import Grid from '/assets/aproposGrille.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Informations = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(".sectionApropos", 
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

    gsap.fromTo(".sectionApropos h3", 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionApropos",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".sectionApropos img", 
      { x: -100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionApropos",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".sectionApropos p", 
      { x: 100, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionApropos",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".sectionApropos .exposition-title", 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".sectionApropos",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );
  }, []);
  

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="p-6 h-[90vh] w-[90vw] max-w-[1200px] border-[1px] border-white border-solid flex flex-col items-center lg:p-16 xl:p-12 content relative xl:flex-row xl:justify-between sectionApropos">
        <h3 className="uppercase absolute text-2xl text-white top-[20px] left-[20px] md:text-4xl lg:text-5xl xl:top-[40px] xl:left-[40px] break-words">
          {t("about")}
        </h3>
        <div className="flex justify-center w-full xl:w-1/2 px-4">
          <img src={Grid} alt="Grid" className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-full' />
        </div>
        <div className="mt-6 xl:mt-0 w-full xl:w-1/2 xl:pl-8">
          <h3 className="exposition-title text-white text-xl md:text-3xl lg:text-4xl mb-4 px-4 xl:px-0 break-words">
            {t("title_info")}
          </h3>
          <p className='text-white font-thin text-sm md:text-lg lg:text-xl px-4 xl:px-0 leading-relaxed'>
            {t("maria_intro")}
          </p>
          <br />
          <p className='text-white font-thin text-sm md:text-lg lg:text-xl px-4 xl:px-0 leading-relaxed'>
            {t("maria_legacy")}
          </p>
          <div className="mt-6 flex justify-center xl:justify-start">
            <Link to="/billeterie">
              <button className="border border-white text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full hover:bg-white hover:text-black transition">
                {t("billeterie")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;