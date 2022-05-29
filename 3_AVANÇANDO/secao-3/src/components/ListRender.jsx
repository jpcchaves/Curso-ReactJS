import React from "react";
import { useState } from "react";

const ListRender = () => {

// **não recomendado!!!!**
// Pode ocasionar erros
  const [list] = useState(["Matheus", "Pedro", "Josias", "Zezinho", "Teste papai"]);

// *MAIS RECOMENDADO* 
// Utilizado em sistemas reais
// Geralmente vem de um banco de dados pronto com as chaves já setadas e únicas para cada objeto
const [users] = useState([
    {id: 1, name: "Zezinho", age: 66},
    {id: 2, name: "Zezinho", age: 66},
    {id: 3, name: "Zezinho", age: 66} 
])

  return <div className="container">
      {/* Menos recomendado */}
      <ul>
          {list.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
      </ul>

      {/* Mais recomendado */}
      <ul>
          {users.map(user => (
              <li key={user.id}>{user.name} - {user.age}</li>
          ))}
      </ul>
  </div>;
};

export default ListRender;
