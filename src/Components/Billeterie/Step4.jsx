import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Recap from "./Recap";
import Button from "./Button";

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
        <Button
          to="/billeterie/step3"
          state={{ name, lastname, mail }}
          text="Retour"
          disabled={false}
        />

        <Button
          to="/billeterie/remerciement"
          state={{ name, lastname, mail, selectedDate, selectedTime, counterNormal, counterEtudiant }}
          text="Confirmer la commande"
          disabled={!(name && lastname && selectedDate && selectedTime && counterNormal && counterEtudiant)}
        />
      </div>
    </div>
  );
};

export default Step4;