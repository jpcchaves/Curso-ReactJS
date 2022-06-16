import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";

  const [name, setName] = useState("Zezinho");

  const changeNames = () => {
    userName = "zezinho da silva";

    setName("João Paulo");
  };

  //   useState com inputs
  const [age, setAge] = useState();

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // podemos enviar os dados para um api
    console.log(age);
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Varável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* useState com input */}
      <hr />
      <p>Digite a sua idade</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Idade </span>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input type="submit" value="enviar" />
        </label>
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
