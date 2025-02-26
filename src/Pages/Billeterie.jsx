import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import Step1 from "../Components/Billeterie/Step1";
import Step2 from "../Components/Billeterie/Step2";
import Step3 from "../Components/Billeterie/Step3";

const Billeterie = () => {
  const location = useLocation();
  useEffect(() => {
    gsap.fromTo(".content", { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
  }, [location]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="p-6 h-[90vh] w-[85vw] border border-white border-solid flex flex-col justify-between lg:justify-start lg:p-24 xl:p-16 content">
        <Routes>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="*" element={<Navigate to="step1" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Billeterie;