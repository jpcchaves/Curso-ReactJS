// Styling
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/Navbar";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
