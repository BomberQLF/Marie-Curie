import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Recap from "./Recap";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Step4 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(location.state.selectedDate);
  const [selectedTime, setSelectedTime] = useState(location.state.selectedTime);
  const [counterNormal, setCounterNormal] = useState(location.state.counterNormal);
  const [counterEtudiant, setCounterEtudiant] = useState(location.state.counterEtudiant);
  const [name, setName] = useState(location.state.name);
  const [lastname, setLastname] = useState(location.state.lastname);
  const [mail, setMail] = useState(location.state.mail);

  const { t } = useTranslation();
  const handlePrice = () => {
    return counterEtudiant * 5 + counterNormal * 10;
  };

  const dataUser = {
    name: name,
    lastname: lastname,
    mail: mail
  };
  const dataReservation = {
    date: selectedDate,
    time: selectedTime,
    counterNormal: counterNormal,
    counterEtudiant: counterEtudiant,
    totalPrice: handlePrice()
  };

  const postDataUser = async () => {
    try {
      const userResponse = await axios.post('https://mcapi.duhez.butmmi.o2switch.site/index.php/users', dataUser);
      console.log(userResponse);

      const reservationResponse = await axios.post('https://mcapi.duhez.butmmi.o2switch.site/index.php/reservation', dataReservation);
      console.log(reservationResponse);

      // Réinitialiser le local storage
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header
          title={t("resume")}
          subtitle={t("subtitle4")}
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
          text={t("retour")}
          disabled={false}
        />

        <Button
          to="/billeterie/remerciement"
          onClick={async () => {
            await postDataUser();
            localStorage.clear();
          }}
          state={{ name, lastname, mail, selectedDate, selectedTime, counterNormal, counterEtudiant }}
          text={t("confirmer")}
          disabled={!(name && lastname && selectedDate && selectedTime && counterNormal && counterEtudiant)}
        />
      </div>
    </div>
  );
};

export default Step4;