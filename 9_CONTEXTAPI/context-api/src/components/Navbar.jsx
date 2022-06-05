// Styling
import "./Navbar.css";

// Router
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </nav>
  );
};

export default Navbar;
