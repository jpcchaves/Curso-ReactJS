import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';


const client = axios.create({
  baseURL: "http://localhost:3000/products"
});

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const resp = await client.get("/")
      setProducts(resp.data)
    }
    getProducts()
  }, [])


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <li>{products[0].name}</li>
      <li>{products[1].name}</li>
      <li>{products[2].name}</li>
    </div>
  );
}

export default App;
