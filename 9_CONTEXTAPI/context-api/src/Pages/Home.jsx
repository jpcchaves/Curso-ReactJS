// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4- refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5- contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Page1 = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5- contexto mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Page1;
