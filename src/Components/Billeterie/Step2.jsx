import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import BilletTarif from "./BilletTarif";
import ImgBillet from '../../../public/assets/billetTest.svg'
import Button from "./Button";

const Step2 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(location.state?.selectedDate || localStorage.getItem("selectedDate"));
  const [selectedTime, setSelectedTime] = useState(location.state?.selectedTime || localStorage.getItem("selectedTime"));
  const [counterNormal, setCounterNormal] = useState(parseInt(localStorage.getItem("counterNormal")) || 0);
  const [counterEtudiant, setCounterEtudiant] = useState(parseInt(localStorage.getItem("counterEtudiant")) || 0);
  const [reset, setReset] = useState(false);

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

  // const resetForm = () => {
  //   localStorage.removeItem("selectedDate");
  //   localStorage.removeItem("selectedTime");
  //   localStorage.removeItem("counterNormal");
  //   localStorage.removeItem("counterEtudiant");
  //   localStorage.removeItem("selectedCreneau");
  //   setSelectedDate(null);
  //   setSelectedTime(null);
  //   setCounterNormal(0);
  //   setCounterEtudiant(0);
  //   setReset(true);
  // };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header
          title={"Choisissez votre ticket"}
          subtitle={`À présent, vous pouvez choisir le type de billet que vous souhaitez !
          Vous pouvez choisir jusqu’à 10 billets pour être en groupe.`}
          step={"Étape 2"}
        />
      </div>
      <div>
        <div className="flex flex-col align-center lg:gap-12 xl:flex-row">
          <div className="flex flex-col">
            <BilletTarif
              ticketName={"Ticket Normal (+26 ans)"}
              price={"10 euros"}
              counter={counterNormal}
              increment={incrementCounterNormal}
              decrement={decrementCounterNormal}
            />
            <BilletTarif
              ticketName={"Ticket Étudiant"}
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
            text="Retour"
          />
          <Button
            to="/billeterie/step3"
            state={{ selectedDate, selectedTime, counterNormal, counterEtudiant }}
            text="Suivant"
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