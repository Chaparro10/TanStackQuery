import { useState } from "react";
import "./App.css";

// http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1
function App() {

  

  const [number, setNumber] = useState();

  return (
    <>
      <h1>Hola Mundo</h1>
      <h3>{number}</h3>
    </>
  );
}

export default App;
