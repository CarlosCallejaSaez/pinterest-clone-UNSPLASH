import React, { useState } from "react";
import Pins from "./components/Pins/Pins";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [InputKey, setInputKey] = useState("random");

  return (
    <>
      <Navbar onSubmit={setInputKey} />
      <Pins InputKey={InputKey} />
    </>
  );
}

export default App;