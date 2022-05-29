// Style
import './App.css';

// Imgs
import City from '../src/assets/city.jpg'

// Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
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
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
    </div>
  );
}

export default App;
