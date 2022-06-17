import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado....");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - useEffect com array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez...");
  }, []);

  //   3- useEffect com dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber é alterado.");
    }
  }, [anotherNumber]);

//   //   4- cleanup do useEffect
//   useEffect(() => {

    // const timer = setTimeout(() => {
    //     setAnotherNumber(anotherNumber + 1)
    // }, 1000)
//     return () => clearTimeout(timer)
//   }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>incrementar o num</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar AnotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
