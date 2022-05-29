const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
    <h2>Detalhes do Carro:</h2>
        <ul>
            <li>{brand}</li>
            <li>{km}</li>
            <li>{color}</li>
            {newCar && <li>Este carro é novo</li>}
        </ul>
    </div>
  )
}

export default CarDetails
