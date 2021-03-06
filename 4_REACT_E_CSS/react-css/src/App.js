import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title'

function App() {
  const n = 14;
  
  // CLASSE DINÂMICA
  const redTitle = true
  // const redTitle = false

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

      {/* CLASSE DINÂMICA  */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS MODULES */}
      <Title />
      <h2 className="my_title">
        Não recebe o estilo   o my_title foi um estilo modularizado e utilizado apenas no componente Title.
      </h2>
    </div>
  );
}

export default App;
