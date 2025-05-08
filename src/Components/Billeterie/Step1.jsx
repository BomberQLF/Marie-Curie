import Calendar from "./Calendar";
import Creneau from "./Creneau";
import Header from "./Header";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Step1 = () => {
  const [selectedDate, setSelectedDate] = useState(
    localStorage.getItem("selectedDate") !== "null" ? localStorage.getItem("selectedDate") : null
  );
  const [selectedTime, setSelectedTime] = useState(
    localStorage.getItem("selectedTime") !== "null" ? localStorage.getItem("selectedTime") : null
  );  
  const [reset, setReset] = useState(false);
  const { t } = useTranslation();

  const horaires = [
    "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"
  ];

  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate);
    } else {
      localStorage.removeItem("selectedDate");
    }

    if (selectedTime) {
      localStorage.setItem("selectedTime", selectedTime);
    } else {
      localStorage.removeItem("selectedTime");
    }
  }, [selectedDate, selectedTime]);
  
  const handleDate = (date) => {
    setSelectedDate(date);
  };

  const handleTime = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header title={t("choose_date")} subtitle={t("subtitle")} step={t("etape1")} />
      </div>
      <p className="text-s text-gray-400 mb-4">
          {t("asterixBis")}
        </p>
      <div className="xl:flex xl:gap-56 flex-grow">
        <div className="mt-6 calendar">
          <Calendar selectedDate={handleDate} />
          {selectedDate && (
            <p className="text-white text-xs mt-4 md:mt-6 md:text-lg lg:text-xl">
              {t("chosen_date")} {selectedDate}
            </p>
          )}
        </div>
        <div className="lg:mt-12 wrapper-cren">
          <Creneau creneaux={horaires} title={t("creneau")} onClick={handleTime} reset={reset} />
        </div>
      </div>
      <div className="flex gap-2 justify-between mt-4 md:mt-6">
        <Button to="/" text={t("retour")} />
        <Button
          to="/billeterie/step2"
          state={{ selectedDate, selectedTime }}
          text={t("suivant")}
          disabled={!selectedDate || !selectedTime}
        />
      </div>
    </div>
  );
};

export default Step1;
