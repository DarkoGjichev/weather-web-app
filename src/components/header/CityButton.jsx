function CityButton({ singleCity, handleClick, city }) {
  return (
    <button
      className={
        "bg-white/20 py-2 px-4 rounded-[20px] text-white text-base font-medium shadow-md cursor-pointer " +
        (singleCity === city ? "border" : "")
      }
      onClick={() => handleClick(singleCity)}
    >
      {singleCity}
    </button>
  );
}
export default CityButton;
