import React from "react";
import HooksUseReducer from "../components/HooksUseReducer";
import HookUseState from "../components/HookUseState";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HooksUseReducer />
    </div>
  );
};

export default Home;
