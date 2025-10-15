import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function DatePicker({ date, setDate }) {
  const minDate = new Date(2022, 0, 1);
  const maxDate = new Date();
  const handleChange = (date) => {
    date.setHours(12, 0, 0, 0);
    const formattedDate = date.toISOString().split("T")[0];
    setDate(formattedDate);
  };
  return (
    <main className="relative max-w-[1035px] w-[100%] mx-auto">
      <button className="flex flex-row items-center ml-auto text-white">
        <h3>{date}</h3>
        <FontAwesomeIcon icon={faCalendarDays} />
      </button>
      <Calendar
        className="absolute right-0 z-1"
        value={date}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    </main>
  );
}

export default DatePicker;
