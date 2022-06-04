// styling
import "./App.css";

// config react-router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound"
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        <NavBar/>
        {/* 9 - search */}
        <SearchForm/>
          <Routes>
            {/* Passamos o caminho e o elemento */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About /> } />
            {/* ROTA DINÂMICA */}
            <Route path="/products/:id" element={<Product/>}/>
            {/* Nested routes */}
            <Route path="/products/:id/info" element={<Info/>}/>
            {/* 9 - search */}
            <Route path="/search" element={<Search/>}/>
            {/* 10 - redirect */}
            <Route path="/company" element={<Navigate to="/about"  />}/>
            {/* 7 - no match route */}
            <Route path="*" element={ <NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
