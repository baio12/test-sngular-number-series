import React, { useState } from "react";
import Result from "./components/Result";
import Calculation from "./components/Calculation";
import Form from "./components/Form";

function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [result, setResult] = useState(0);
  
  return (
    <div className="container">
      <div className="container__block">
        <div className="container__block--title">
          <h1>
            Bienvenido al ejercicio de series numéricas
          </h1>
          <h3 className="container__block--title--instructions">
            Por favor, ingresa un número natural para proceder con el cálculo
          </h3>
        </div>
        <Form setUserNumber={setUserNumber}/>
        <Calculation userNumber={userNumber} setResult={setResult} />
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;
