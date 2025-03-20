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
      <div className="p-6 h-[90vh] w-[85vw] border-[1px] border-white border-solid flex flex-col items-center lg:p-24 xl:p-16 content relative xl:flex-row xl:justify-between sectionApropos">
        <h3 className="uppercase absolute text-2xl text-white lg:top-[140px] lg:left-[120] md:text-[5rem]">{t("about")}</h3>
        <div className="flex justify-center xl:w-1/2">
          <img src={Grid} alt="Grid" className='md:w-[80%] lg:w-[90%] xl:w-full' />
        </div>
        <div className="mt-6 xl:mt-0 xl:w-1/2 xl:pl-12">
          <h3 className="exposition-title text-white text-2xl md:text-4xl lg:text-5xl ml-4 mb-4">{t("title_info")}</h3>
          <p className='text-white font-thin text-sm md:text-xl lg:text-2xl'>
            {t("maria_intro")}
          </p>
          <br />
          <p className='text-white font-thin text-sm md:text-xl lg:text-2xl'>
            {t("maria_legacy")}
          </p>
          <div className="mt-6">
            <Link to="/billeterie">
              <button className="border border-white text-white px-6 py-2 lg:px-10 lg:py-4 rounded-full hover:bg-white hover:text-black transition">
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