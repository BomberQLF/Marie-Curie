import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FormComponent from "./FormComponent";

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
          title="Coordonnées"
          subtitle="Afin de vous envoyer vos tickets, nous avons besoin de quelques informations. Merci de bien vouloir remplir les champs ci-dessous."
          step="Étape 3"
        />
      </div>
      <div>
        <FormComponent
          formData={{ name, lastname, email }}
          handleChange={handleForm}
        />
      </div>
      <div className="flex gap-4 justify-between mt-6">
        <Link
          to="/billeterie/step2"
          state={{
            selectedDate,
            selectedTime,
            counterNormal,
            counterEtudiant,
          }}
        >
          <span className="uppercase text-white text-2xl underline lg:text-4xl">
            Retour
          </span>
        </Link>
        {name && lastname && email ? (
          <Link
            to="/billeterie/confirmation"
            state={{
              selectedDate,
              selectedTime,
              counterNormal,
              counterEtudiant,
              name,
              lastname,
              email,
            }}
          >
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
  );
};

export default Step3;
