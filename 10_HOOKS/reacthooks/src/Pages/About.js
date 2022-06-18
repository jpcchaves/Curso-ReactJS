import React from "react";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext); 

  return <div>
    <h1>About</h1>
    <p>
      usando o useContext: {contextValue}
    </p>
    <p>Nesse caso, o useContext demonstra o seu poder de utilidade. Como o intuito é construir SPAs, o useContext auxilia em compartilhar um State global na aplicação sem a necessidade de recarregar a página. </p>
  </div>;
};

export default About;
