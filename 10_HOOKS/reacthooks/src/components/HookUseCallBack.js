import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallBack = () => {
  const [counter, setCounter] = useState(0);

  const getItensFromDB = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallBack</h2>
      <List getItems={getItensFromDB} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
    </div>
  );
};

export default HookUseCallBack;
