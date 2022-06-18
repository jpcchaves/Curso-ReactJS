import React from "react";
import HooksUseReducer from "../components/HooksUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseState from "../components/HookUseState";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HooksUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
    </div>
  );
};

export default Home;
