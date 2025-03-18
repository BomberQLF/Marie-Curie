import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Recap from "./Recap";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Step4 = () => {
  const location = useLocation();

  const [selectedDate, setSelectedDate] = useState(location.state?.selectedDate || "");
  const [selectedTime, setSelectedTime] = useState(location.state?.selectedTime || "");
  const [counterNormal, setCounterNormal] = useState(location.state?.counterNormal || 0);
  const [counterEtudiant, setCounterEtudiant] = useState(location.state?.counterEtudiant || 0);
  const [name, setName] = useState(location.state?.name || "");
  const [lastname, setLastname] = useState(location.state?.lastname || "");
  const [email, setMail] = useState(location.state?.email || "");

  const { t } = useTranslation();

  const handlePrice = () => counterEtudiant * 5 + counterNormal * 10;

  const postDataUser = async () => {
    try {
      const tokenResponse = await axios.post(
        "https://mcapi.duhez.butmmi.o2switch.site/index.php/key",
        { login: "admin", mdp: "admin" },
        { headers: { "Content-Type": "application/json" } }
      );

      if (!tokenResponse.data.token) return;

      const token = tokenResponse.data.token;

      const usersResponse = await axios.get(
        "https://mcapi.duhez.butmmi.o2switch.site/index.php/users/",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!Array.isArray(usersResponse.data)) return;

      let createdUser = usersResponse.data.find(
        (user) =>
          user.user_name.toLowerCase() === name.trim().toLowerCase() &&
          user.user_lastname.toLowerCase() === lastname.trim().toLowerCase() &&
          user.user_email.toLowerCase() === email.trim().toLowerCase()
      );

      if (!createdUser) {
        const dataUser = new URLSearchParams();
        dataUser.append("user_name", name.trim());
        dataUser.append("user_lastname", lastname.trim());
        dataUser.append("email", email.trim());

        await axios.post(
          "https://mcapi.duhez.butmmi.o2switch.site/index.php/users/",
          dataUser,
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const retryUsersResponse = await axios.get(
          "https://mcapi.duhez.butmmi.o2switch.site/index.php/users/",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        createdUser = retryUsersResponse.data.find(
          (user) =>
            user.user_name.toLowerCase() === name.trim().toLowerCase() &&
            user.user_lastname.toLowerCase() === lastname.trim().toLowerCase() &&
            user.user_email.toLowerCase() === email.trim().toLowerCase()
        );

        if (!createdUser) return;
      }

      const dataReservation = new URLSearchParams();
      dataReservation.append("reservation_date", selectedDate);
      dataReservation.append("reservation_time", selectedTime);
      dataReservation.append("reservation_nb_normal", Number(counterNormal));
      dataReservation.append("reservation_nb_student", Number(counterEtudiant));
      dataReservation.append("reservation_prix", Number(handlePrice()));
      dataReservation.append("reservation_user", createdUser.user_id);

      await axios.post(
        "https://mcapi.duhez.butmmi.o2switch.site/index.php/reservations/",
        dataReservation,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      localStorage.clear();
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi des données:", error.response?.data || error.message);
    }
  };

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
        <Button to="/billeterie/step3" state={{ name, lastname, email }} text={t("retour")} />
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
          disabled={!(name && lastname && email && selectedDate && selectedTime)}
        />
      </div>
    </div>
  );
};

export default Step4;
