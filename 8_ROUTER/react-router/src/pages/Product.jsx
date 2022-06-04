import { useParams } from 'react-router-dom'

const Product = () => {
    // 4- rota dinamica
    // o useParams nos trás um objeto com todos os parâmetros da url
    const {id } = useParams()
  return (
    <>
    <p>ID do produto: {id}</p>
    </>
  )
}
export default Product
