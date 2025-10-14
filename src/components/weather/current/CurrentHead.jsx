function CurrentHead({ time, date }) {
  if (time) {
    return (
      <header className="flex flex-row justify-between font-2 border-b border-white">
        <h2>CURRENT WEATHER</h2>
        <p>
          Last updated:{" "}
          <time>
            {new Date(time).toLocaleString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </p>
      </header>
    );
  } else {
    return (
      <header className="flex flex-row justify-between font-2 border-b border-white">
        <h2>WEATHER FOR: {date}</h2>
      </header>
    );
  }
}

export default CurrentHead;
