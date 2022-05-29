import React from "react";
import { useState } from "react";

const ListRender = () => {
  // **não recomendado!!!!**
  // Pode ocasionar erros
  const [list] = useState([
    "Matheus",
    "Pedro",
    "Josias",
    "Zezinho",
    "Teste papai",
  ]);

  // *MAIS RECOMENDADO*
  // Utilizado em sistemas reais
  // Geralmente vem de um banco de dados pronto com as chaves já setadas e únicas para cada objeto
  const [users, setUsers] = useState([
    { id: 1, name: "Zezinho", age: 66 },
    { id: 2, name: "Zezinho", age: 66 },
    { id: 3, name: "Zezinho", age: 66 },
  ]);

  const deleteRandom = () => {
    // Num aleatório entre 1 e 3 para escolher um usuário do array de objetos
    const randomNumber = Math.floor(Math.random() * 4);

    // Pegand o previous state
    setUsers((prevUsers) => {
      return prevUsers.filter ((user) => randomNumber !== user.id);
    });
  };

  return (
    <div className="container">
      {/* Menos recomendado */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Mais recomendado */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
