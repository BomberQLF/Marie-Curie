import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Recap from "./Recap";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Step4 = () => {
  const location = useLocation();

  const [selectedDate, setSelectedDate] = useState(
    location.state?.selectedDate || ""
  );
  const [selectedTime, setSelectedTime] = useState(
    location.state?.selectedTime || ""
  );
  const [counterNormal, setCounterNormal] = useState(
    location.state?.counterNormal || 0
  );
  const [counterEtudiant, setCounterEtudiant] = useState(
    location.state?.counterEtudiant || 0
  );
  const [name, setName] = useState(location.state?.name || "");
  const [lastname, setLastname] = useState(location.state?.lastname || "");
  const [email, setMail] = useState(location.state?.email || "");

  const { t } = useTranslation();

  const handlePrice = () => counterEtudiant * 5 + counterNormal * 10;

  const postDataUser = async () => {
    if (!name || !lastname || !email) {
      console.error("❌ Erreur: Informations utilisateur incomplètes", {
        name,
        lastname,
        email,
      });
      alert("Veuillez remplir toutes les informations avant de continuer.");
      return;
    }

    const dataUser = new URLSearchParams();
    dataUser.append("user_name", name.trim());
    dataUser.append("user_lastname", lastname.trim());
    dataUser.append("email", email.trim());

    const dataReservation = new URLSearchParams();
    dataReservation.append("reservation_date", selectedDate);
    dataReservation.append("reservation_time", selectedTime);
    dataReservation.append("reservation_nb_normal", Number(counterNormal));
    dataReservation.append("reservation_nb_student", Number(counterEtudiant));
    dataReservation.append("reservation_prix", Number(handlePrice()));
    dataReservation.append("reservation_user", 1);

    try {
      console.log("📤 Envoi des données utilisateur:", dataUser.toString());

      const userResponse = await axios.post(
        "https://mcapi.duhez.butmmi.o2switch.site/index.php/users/",
        dataUser,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      console.log("✅ Réponse API utilisateur:", userResponse.data);

      if (userResponse.data.status !== 200) {
        console.error("❌ Erreur API:", userResponse.data);
        alert(`Erreur API Utilisateur: ${userResponse.data.message}`);
        return;
      }

      console.log(
        "📤 Envoi des données de réservation:",
        dataReservation.toString()
      );

      const reservationResponse = await axios.post(
        "https://mcapi.duhez.butmmi.o2switch.site/index.php/reservations/",
        dataReservation,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      console.log("✅ Réponse API réservation:", reservationResponse.data);

      if (reservationResponse.data.status !== 200) {
        console.error("❌ Erreur API Réservation:", reservationResponse.data);
        alert(`Erreur API Réservation: ${reservationResponse.data.message}`);
        return;
      }
      
      localStorage.clear();
    } catch (error) {
      console.error(
        "❌ Erreur lors de l'envoi des données:",
        error.response?.data || error.message
      );
      alert(
        `Erreur serveur: ${error.response?.data?.message || error.message}`
      );
    }
  };

  useEffect(() => {
    console.log("📍 State reçu dans Step4:", location.state);
  }, [location.state]);

  return (
    <div className="flex flex-col justify-between h-full">
      <Header title={t("resume")} subtitle={t("subtitle4")} step={null} />
      <Recap
        name={name}
        lastname={lastname}
        date={selectedDate}
        time={selectedTime}
        counterNormal={counterNormal}
        counterEtudiant={counterEtudiant}
        totalPrice={handlePrice()}
      />
      <div className="flex gap-4 justify-between mt-6">
        <Button
          to="/billeterie/step3"
          state={{ name, lastname, email }}
          text={t("retour")}
        />
        <Button
          to="/billeterie/remerciement"
          onClick={async () => {
            await postDataUser();
          }}
          state={{
            name,
            lastname,
            email,
            selectedDate,
            selectedTime,
            counterNormal,
            counterEtudiant,
          }}
          text={t("confirmer")}
          disabled={
            !(name && lastname && email && selectedDate && selectedTime)
          }
        />
      </div>
    </div>
  );
};

export default Step4;