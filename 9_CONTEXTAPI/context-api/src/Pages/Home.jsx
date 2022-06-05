// import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 4- refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";

const Page1 = () => {
  // const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Page1;
