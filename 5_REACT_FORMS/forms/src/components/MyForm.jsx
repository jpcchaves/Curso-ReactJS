import React from 'react'
import './MyForm.css'

import { useState } from 'react'

const MyForm = () => {
  // 3- Gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  // 3- Funções de gerenciamento
  const handleName = (e) => {
    setName(e.target.value)
    // "e" é um objeto (retornado por padrão), dentro dele temos o "target" e dentro de target temos o "value", que é o valor inserido no input
  }
  console.log(name)
  console.log(email)


  return (
    <div>

      {/* 1 - Criação de Forms */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder='Digite o seu nome...' onChange={handleName} />
        </div>

        {/* 2- Label envolvendo input */}
        {/* Prática recomendada! */}
        <label>
          <span>E-mail</span>
            {/* State inline */}
          {/* (*não recomendado*) */}
          <input type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => {setEmail(e.target.value)}}/>
        </label>
        <input type="submit" value="enviar" />

        


      </form>
    </div>
  )
}

export default MyForm