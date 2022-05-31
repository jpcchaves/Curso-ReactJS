import React from 'react'
import './MyForm.css'

const MyForm = () => {
  return (
    <div>
      {/* 1 - Criação de Forms */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder='Digite o seu nome...' />
        </div>
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default MyForm