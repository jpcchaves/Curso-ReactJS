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
        {/* 2- Label envolvendo input */}
          {/* Prática recomendada! */}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder='Digite o seu e-mail'/>
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default MyForm