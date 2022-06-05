// Styling
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/Navbar";

// Pages
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/page1" element={ <Page1/>}/>
          <Route path="/page2" element={ <Page2/>}/>
          <Route path="/page3" element={ <Page3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
