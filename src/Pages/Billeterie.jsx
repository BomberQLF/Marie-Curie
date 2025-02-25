import { useState } from "react";
import Step1 from "../Components/Billeterie/Step1";
import Step2 from "../Components/Billeterie/Step2";
import Step3 from "../Components/Billeterie/Step3";

const Billeterie = () => {
    const [title, setTitle] = useState("");
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        heure: "",
        ticket: "",
        coordonnees: [nom => "", numero => ""],
        resume: []
    })

    const handleStep = (step) => {
        setStep(step);
    }

    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="p-6 h-[90vh] w-[85vw] border border-white border-solid flex flex-col justify-evenly lg:justify-start lg:p-24">
            {step && step === 1 && <Step1 stepStatus={handleStep} />}
            {step && step === 2 && <Step2 />}
            {step && step === 3 && <Step3 />}
        </div>
      </div>
    );
  };
  
  export default Billeterie;