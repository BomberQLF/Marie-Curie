import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import BilletTarif from "./BilletTarif";
import ImgBillet from '../../../public/assets/billetTest.svg'

const Step2 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(location.state?.selectedDate || localStorage.getItem("selectedDate"));
  const [selectedTime, setSelectedTime] = useState(location.state?.selectedTime || localStorage.getItem("selectedTime"));
  const [counterNormal, setCounterNormal] = useState(parseInt(localStorage.getItem("counterNormal")) || 0);
  const [counterEtudiant, setCounterEtudiant] = useState(parseInt(localStorage.getItem("counterEtudiant")) || 0);

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
          <Link to="/billeterie/step1"
            state={{ selectedDate: selectedDate, selectedTime: selectedTime }}>
            <span className="uppercase text-white text-2xl underline lg:text-4xl">
              Retour
            </span>
          </Link>
          {totalTickets > 0 ? (
            <Link to="/billeterie/step3"
              state={{ selectedDate: selectedDate, selectedTime: selectedTime, counterNormal: counterNormal, counterEtudiant: counterEtudiant }}>
              <span className="uppercase text-white text-2xl underline lg:text-4xl">
                Suivant
              </span>
            </Link>
          ) : (
            <span className="uppercase text-gray-500 text-2xl underline lg:text-4xl cursor-not-allowed">
              Suivant
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2;