import Calendar from "./Calendar";
import Creneau from "./Creneau";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Step1 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const horaires = [
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
    "16:30",
    "17:30",
    "18:30",
  ];

  const handleDate = (date) => {
    setSelectedDate(date);
    console.log(date); //a delete plus tard
  };

  const handleTime = (time) => {
    setSelectedTime(time);
    console.log(time); //a delete plus tard
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header
          title={"Choisissez votre date et créneau"}
          subtitle={`Bienvenue sur la billetterie de l’exposition Marie Curie, une vie de
          lumière et d’ombre. Vous pouvez réserver un créneau d’une heure et une
          date pour pouvoir assister à l’exposition.`}
        />
      </div>
      <div className="xl:flex xl:gap-56 flex-grow">
        <div className="mt-6 calendar">
          <Calendar selectedDate={handleDate} />
          {selectedDate !== null && (
            <p className="text-white text-xs mt-4 md:mt-6 md:text-lg lg:text-xl">
              Vous avez choisi le : {selectedDate}
            </p>
          )}
        </div>
        <div className="lg:mt-12 wrapper-cren">
          <Creneau creneaux={horaires} title={"Créneau"} onClick={handleTime} />
        </div>
      </div>
      <div className="flex gap-4 justify-between mt-6">
        <Link to="/billeterie">
          <span className="uppercase text-white text-2xl underline lg:text-4xl">
            Retour
          </span>
        </Link>
        <Link
          to="/billeterie/step2"
          state={{ selectedDate: selectedDate, selectedTime: selectedTime }}
        >
          <span className="uppercase text-white text-2xl underline lg:text-4xl">
            Suivant
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Step1;