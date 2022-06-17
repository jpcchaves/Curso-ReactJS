import React from "react";
import HooksUseReducer from "../components/HooksUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseState from "../components/HookUseState";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HooksUseReducer />
      <HookUseEffect />
    </div>
  );
};

export default Home;
