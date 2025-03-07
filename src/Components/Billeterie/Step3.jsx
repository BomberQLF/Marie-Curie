import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FormComponent from "./FormComponent";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Step3 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(
    location.state?.selectedDate || localStorage.getItem("selectedDate")
  );
  const [selectedTime, setSelectedTime] = useState(
    location.state?.selectedTime || localStorage.getItem("selectedTime")
  );
  const [counterNormal, setCounterNormal] = useState(
    localStorage.getItem("counterNormal") || 0
  );
  const [counterEtudiant, setCounterEtudiant] = useState(
    localStorage.getItem("counterEtudiant") || 0
  );
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [lastname, setLastname] = useState(
    localStorage.getItem("lastname") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
  }, [name, lastname, email]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "lastname") {
      setLastname(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header
          title={t("coordonnees")}
          subtitle={t("subtitle3")}
          step={t("step3")}
        />
      </div>
      <div>
        <FormComponent
          formData={{ name, lastname, email }}
          handleChange={handleForm}
        />
      </div>
      <div className="flex gap-4 justify-between mt-6">
        <Button
          to="/billeterie/step2"
          state={{
            selectedDate,
            selectedTime,
            counterNormal,
            counterEtudiant,
          }}
          text={t("retour")}
        />
        <Button
          to="/billeterie/step4"
          state={{
            selectedDate,
            selectedTime,
            counterNormal,
            counterEtudiant,
            name,
            lastname,
            email,
          }}
          text={t("suivant")}
          disabled={!name || !lastname || !email}
        />
      </div>
    </div>
  );
};

export default Step3;