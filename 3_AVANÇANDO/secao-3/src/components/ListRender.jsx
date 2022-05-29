import React from "react";
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Zezinho", "Teste papai"]);
  return <div className="container">
      <ul>
          {list.map(item => (
              <li>{item}</li>
          ))}
      </ul>
  </div>;
};

export default ListRender;
