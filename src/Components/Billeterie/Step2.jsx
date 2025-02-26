import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Step2 = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(location.state.selectedDate);
  const [selectedTime, setSelectedTime] = useState(location.state.selectedTime);
  console.log(selectedDate);
  console.log(selectedTime);

  return (
    <div>
      <Header
        title={"Choisissez votre ticket"}
        subtitle={`À présent, vous pouvez choisir le type de billet que vous souhaitez !
        Vous pouvez choisir jusqu’à 10 billets pour être en groupe.`}
      />
    </div>
  );
};

export default Step2;
