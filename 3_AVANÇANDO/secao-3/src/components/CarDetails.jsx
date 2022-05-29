const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
    <h2>Detalhes do Carro:</h2>
        <ul>
            <li>{brand}</li>
            <li>{km}</li>
            <li>{color}</li>
        </ul>
    </div>
  )
}

export default CarDetails
