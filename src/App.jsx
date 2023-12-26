import React, { useState } from "react";
import Pins from "./components/Pins/Pins";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [InputKey, setInputKey] = useState("random");

  return (
    <>
      <Navbar onSubmit={setInputKey} />
      <Pins InputKey={InputKey} />
      <Footer />
    </>
  );
}

export default App;