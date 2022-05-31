import './App.css';
import ShowCars from './components/ShowCars';

function App() {
  const cars = [
    {id: 1, brand: "VW", color: "Branco", km: 10000, brandNew: false},
    {id: 2, brand: "Fiat", color: "Vermelho", km: 0, brandNew: true},
    {id: 3, brand: "Ferrari", color: "Vermelha", km: 0, brandNew: true}
  ]

  return (
    <div className="App">
      <h1 className='title-list'>Lista de carros</h1>
      {cars.map(car => (
        <ShowCars
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          brandNew={car.brandNew}
        />
      ))}
    </div>
  );
}

export default App;
