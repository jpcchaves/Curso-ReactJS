import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4- rota dinamica
  // o useParams nos trás um objeto com todos os parâmetros da url
  const { id } = useParams();

  // 5- carregamento dinâmico individual
  const url = "http://localhost:4000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && (
        <p>Ocorreu um erro ao carregar o produto.... Tente novamente</p>
      )}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
        </div>
      )}
    </>
  );
};
export default Product;
