import React from 'react'
import styles from './ShowCars.module.css'

const ShowCars = ({brand, color, km, brandNew}) => {
  return (
    <div>
      <ul>
          <h1 className={styles['brand_name']}>Marca: {brand}</h1>
          <li className={styles['list_styles']}>Cor: {color}</li>
          <li className={styles['list_styles']}>Quilometragem: {km} Km</li>
          <li className={styles['list_styles']}>{brandNew ? "Carro Novo" : "Carro Usado"}</li>
      </ul>
    </div>
  )
}

export default ShowCars
