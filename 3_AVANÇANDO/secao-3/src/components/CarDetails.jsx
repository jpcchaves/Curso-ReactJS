const CarDetails = ({ brand, km, color, novo }) => {
  return (
    <div>
    <h2>Detalhes do Carro:</h2>
        <ul>
            <li>{brand}</li>
            <li>{km}</li>
            <li>{color}</li>
        </ul>
        {novo && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetails
