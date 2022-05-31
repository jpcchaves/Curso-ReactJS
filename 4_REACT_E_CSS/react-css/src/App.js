import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 14;

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
      {/* CSS INLINE DINÂMICO */}
      <h2 style= { n < 10 ? {color: "purple"} : {color: "pink"}}>CSS dinâmico</h2>
    </div>
  );
}

export default App;
