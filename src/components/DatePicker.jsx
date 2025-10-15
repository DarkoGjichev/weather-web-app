import Calendar from "react-calendar";

function DatePicker({ date, setDate }) {
  const minDate = new Date(2022, 0, 1);
  const maxDate = new Date();
  const handleChange = (date) => {
    date.setHours(12, 0, 0, 0);
    const formattedDate = date.toISOString().split("T")[0];
    setDate(formattedDate);
  };
  return (
    <main>
      {" "}
      <Calendar
        value={date}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    </main>
  );
}

export default DatePicker;
