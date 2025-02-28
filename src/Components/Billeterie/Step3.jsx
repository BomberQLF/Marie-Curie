import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



const Step3 = () => {
    const location = useLocation();
    const [selectedDate, setSelectedDate] = useState(location.state?.selectedDate || localStorage.getItem("selectedDate"));
    const [selectedTime, setSelectedTime] = useState(location.state?.selectedTime || localStorage.getItem("selectedTime"));
    const [counterNormal, setCounterNormal] = useState(parseInt(localStorage.getItem("counterNormal")) || 0);
    const [counterEtudiant, setCounterEtudiant] = useState(parseInt(localStorage.getItem("counterEtudiant")) || 0);
    console.log(selectedDate + " " + selectedTime + " " + counterNormal + " " + counterEtudiant);
    

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <Header 
                title={"Coordonnées"}
                subtitle={`Afin de vous envoyer vos tickets, nous avons besoin de quelques informations. Merci de bien vouloir remplir les champs ci-dessous.`}
                step={"Étape 3"} />
            </div>
        </div>
    )
}

export default Step3;