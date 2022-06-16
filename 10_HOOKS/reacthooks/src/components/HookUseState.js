import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";

  const [name, setName] = useState("Zezinho");

  const changeNames = () => {
    userName = "zezinho da silva"

    setName("João Paulo")
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Varável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>
        Mudar nomes
      </button>
      <hr />
    </div>
  );
};

export default HookUseState;
