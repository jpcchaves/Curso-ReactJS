// Css
import "./NavBar.css";

// Link Component
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="./About">About</Link> */}
      {/* Utilizando o NavLink, podemos adicionar a classe de estilo dinamicamente ".active" quando o elemento é selecionado */}
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar;
