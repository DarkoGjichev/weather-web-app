import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [location, setLocation] = useState(null);
  return (
    <>
      <Header setLocation={setLocation} />
    </>
  );
}

export default App;
