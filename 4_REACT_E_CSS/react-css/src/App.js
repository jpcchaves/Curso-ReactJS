import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/* INLINE CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "5px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
