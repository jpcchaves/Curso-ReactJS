// Style
import "./App.css";

// Imgs
import City from "../src/assets/city.jpg";

// Components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import AulaFragment from "./components/AulaFragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amalero", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Azul", newCar: false, km: 2000 },
    { id: 3, brand: "VW", color: "Amalero", newCar: false, km: 200 },
  ];

  // Função
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // Estado
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Hello World! Desafio Concluído.</h1>
      <h3>Colocando imagens</h3>
      {/* Carregando IMGS em src */}
      <div>
        <img src="./img1.jpg" alt="paisagem" />
      </div>
      {/* Carregando IMGS dentro da pasta ASSETS (recomendado) */}
      <img src={City} alt="imagem da cidade" />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Zezinho" />
      {/* destructuring */}
      <CarDetails brand="WV" km={0} color="Azul" newCar={true} />
      {/* reaproveitando components */}
      <CarDetails brand="Ford" km={10000000} color="Vermelho" newCar={false} />

      <CarDetails brand="Ford" km={10000000} color="Vermelho" newCar={false} />

      <CarDetails brand="Ford" km={10000000} color="Vermelho" newCar={false} />

      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <AulaFragment propFragment="teste" />

      {/* Children */}
      <Container myValue="testinnnng">
        <p>Esse aqui é um filho que será recebido pelo componente filho</p>
      </Container>
      <Container>
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
