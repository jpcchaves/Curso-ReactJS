import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Page1 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Page1;
