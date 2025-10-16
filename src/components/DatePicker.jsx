import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DatePicker({ date, setDate }) {
  const [active, setActive] = useState(false);
  const minDate = new Date(2022, 0, 1);
  const maxDate = new Date();

  const handleChange = (date) => {
    date.setHours(12, 0, 0, 0);
    const formattedDate = date.toISOString().split("T")[0];
    setDate(formattedDate);
    setActive(false);
  };

  return (
    <main className="relative max-w-[1035px] w-[100%] mx-auto">
      <button
        onClick={() => setActive(!active)}
        className="flex flex-row items-center ml-auto text-white"
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        <h3>{date}</h3>
        <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
      </button>
      {active && (
        <Calendar
          className="absolute right-0 z-1"
          value={date}
          onChange={handleChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
    </main>
  );
}

export default DatePicker;
