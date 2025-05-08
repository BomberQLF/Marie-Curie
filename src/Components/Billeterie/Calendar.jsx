const Calendar = ({ selectedDate }) => {
    console.log(selectedDate);
    
    return (
        <div className="mt-6 md:mt-12">
            <input
            className="p-[0.6rem] md:p-[0.8rem] lg:p-[1rem] xl:p-[1.2rem] 2xl:p-[1.5rem]"
            type="date" 
            name="calendar"
            aria-label="Sélectionner une date"
            onChange={(e) => selectedDate(e.target.value)}
            />
        </div>
    )
}

export default Calendar;