import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import BilletTarif from "./BilletTarif";
import ImgBillet from '../../../public/assets/billetTest.svg'
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Step2 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(location.state?.selectedDate || localStorage.getItem("selectedDate"));
  const [selectedTime, setSelectedTime] = useState(location.state?.selectedTime || localStorage.getItem("selectedTime"));
  const [counterNormal, setCounterNormal] = useState(parseInt(localStorage.getItem("counterNormal")) || 0);
  const [counterEtudiant, setCounterEtudiant] = useState(parseInt(localStorage.getItem("counterEtudiant")) || 0);
  const [reset, setReset] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("selectedTime", selectedTime);
    localStorage.setItem("counterNormal", counterNormal);
    localStorage.setItem("counterEtudiant", counterEtudiant);
  }, [selectedDate, selectedTime, counterNormal, counterEtudiant]);

  const incrementCounterNormal = () => {
    setCounterNormal(counterNormal + 1);
  };
  const decrementCounterNormal = () => {
    if (counterNormal > 0) setCounterNormal(counterNormal - 1);
  };
  const incrementCounterEtudiant = () => {
    setCounterEtudiant(counterEtudiant + 1);
  };
  const decrementCounterEtudiant = () => {
    if (counterEtudiant > 0) setCounterEtudiant(counterEtudiant - 1);
  };

  const totalTickets = counterNormal + counterEtudiant;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header
          title={t("chose_ticket")}
          subtitle={t(`subtitle2`)}
          step={t("etape2")}
        />
      </div>
      <div>
        <div className="flex flex-col align-center lg:gap-12 xl:flex-row">
          <div className="flex flex-col">
            <BilletTarif
              ticketName={t("ticket_normal")}
              price={"10 euros"}
              counter={counterNormal}
              increment={incrementCounterNormal}
              decrement={decrementCounterNormal}
            />
            <BilletTarif
              ticketName={t("ticket_etudiant")}
              price={"5 euros"}
              counter={counterEtudiant}
              increment={incrementCounterEtudiant}
              decrement={decrementCounterEtudiant}
            />
          </div>
          <div>
            <img src={ImgBillet} alt="Billet" />
          </div>
        </div>
        <div className="flex gap-4 justify-between mt-6">
          <Button
            to="/billeterie/step1"
            state={{ selectedDate, selectedTime }}
            text={t("retour")}
          />
          <Button
            to="/billeterie/step3"
            state={{ selectedDate, selectedTime, counterNormal, counterEtudiant }}
            text={t("suivant")}
            disabled={totalTickets === 0}
          />
        </div>
        {/* <button onClick={resetForm} className="mt-4 p-2 bg-red-500 text-white rounded">
          Réinitialiser le formulaire
        </button> */}
      </div>
    </div>
  );
};

export default Step2;