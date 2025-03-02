import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Recap from "./Recap";

const Step4 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(location.state.selectedDate);
  const [selectedTime, setSelectedTime] = useState(location.state.selectedTime);
  const [counterNormal, setCounterNormal] = useState(location.state.counterNormal);
  const [counterEtudiant, setCounterEtudiant] = useState(location.state.counterEtudiant);
  const [name, setName] = useState(location.state.name);
  const [lastname, setLastname] = useState(location.state.lastname);
  const [mail, setMail] = useState(location.state.mail);

  const handlePrice = () => {
    return counterEtudiant * 5 + counterNormal * 10;
};

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header
          title={"Résumé"}
          subtitle={
            "Vous êtes sur le point de confirmer votre commande. En le faisant, vous acceptez les conditions générales de vente ainsi que le traitement des données fournies par l'agence VisiOrama."
          }
          step={null}
        />
      </div>
      <div>
        <Recap
          name={name}
          lastname={lastname}
          date={selectedDate}
          time={selectedTime}
          counterNormal={counterNormal}
          counterEtudiant={counterEtudiant}
          totalPrice={handlePrice()}
        />
      </div>
      <div className="flex gap-4 justify-between mt-6">
        <Link to="/billeterie/step3" state={{ name, lastname, mail }}>
          <span className="uppercase text-white text-2xl underline lg:text-4xl">
            Retour
          </span>
        </Link>

        {name &&
        lastname &&
        selectedDate &&
        selectedTime &&
        counterNormal &&
        counterEtudiant ? (
          <Link to="/billeterie/remerciement">
            <span className="uppercase text-white text-2xl underline lg:text-4xl">
              Confirmer la commande
            </span>
          </Link>
        ) : (
          <span className="uppercase text-gray-500 text-2xl underline lg:text-4xl cursor-not-allowed">
            Confirmer la commande
          </span>
        )}
      </div>
    </div>
  );
};

export default Step4;
