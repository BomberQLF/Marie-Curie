import Calendar from "./Calendar";
import Creneau from "./Creneau";
import { useState } from "react";

const Step1 = ({ stepStatus }) => {
    const [selectedDate, setSelectedDate] = useState(null); 
    const horaires = ["10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"];

    const handleDate = (date) => {
        setSelectedDate(date);
    }

    return (
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="uppercase text-white text-2xl md:text-4xl lg:text-6xl">Choisissez votre date et créneau</h1>
                <p className="text-white text-xs mt-4 md:text-xl md:mt-8 lg:mt-12 lg:text-2xl">Bienvenue sur la billetterie de l’exposition Marie Curie, une vie de lumière et d’ombre.
                Vous pouvez réserver un créneau d’une heure et une date pour pouvoir assister à l’exposition.</p>
            </div>
            <div className="mt-6 calendar">
                <Calendar selectedDate={handleDate} />
                {selectedDate !== null && <p className="text-white text-xs mt-4 md:mt-6 md:text-lg lg:text-xl">Vous avez choisi le : {selectedDate}</p>}
            </div>
            <div>
                <Creneau creneaux={horaires} />
            </div>
            <div className="flex gap-4 justify-between mt-6">
                <span 
                onClick={() => stepStatus(0)}
                className="uppercase text-white text-2xl underline lg:text-4xl">
                Retour
                </span>
                <span 
                onClick={() => stepStatus(2)}
                className="uppercase text-white text-2xl underline lg:text-4xl">
                Suivant
                </span>
            </div>
            
        </div>
    )
}

export default Step1;