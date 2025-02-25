
const Calendar = ({ selectedDate }) => {
    console.log(selectedDate);
    
    return (
        <div className="mt-6 md:mt-12">
            <input
            className="p-[0.6rem] md:p-[1rem] lg:p-[1.5rem]"
            type="date" 
            name="calendar"
            onChange={(e) => selectedDate(e.target.value)}
            />
        </div>
    )
}

export default Calendar;