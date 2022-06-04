// styling
import "./App.css";

// config react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            {/* Passamos o caminho e o elemento */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About /> } />
            {/* ROTA DINÂMICA */}
            <Route path="/products/:id" element={<Product/>}/>
            {/* Nested routes */}
            <Route path="/products/:id/info" element={<Info/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
