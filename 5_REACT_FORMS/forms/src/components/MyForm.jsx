import React from 'react'
import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ user }) => {
  // 6- controlled inputs


  // 3- Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState("")

  // 3- Funções de gerenciamento
  const handleName = (e) => {
    setName(e.target.value)
    // "e" é um objeto (retornado por padrão), dentro dele temos o "target" e dentro de target temos o "value", que é o valor inserido no input
  }

  // Envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("enviando o formulário", name, email, bio)

    // 7 - LIMPAR O FORM APÓS O SUBMIT
    setName("")
    setEmail("")
  }

  return (
    <div>
      {/* 5- Envio de formulário (handleSubmit)*/}
      {/* 1 - Criação de Forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input value={name} type="text" name="name" placeholder='Digite o seu nome...' onChange={handleName} />
        </div>

        {/* 2- Label envolvendo input */}
        {/* Prática recomendada! */}
        <label>
          <span>E-mail</span>
          {/* State inline */}
          {/* (*não recomendado*) */}
          <input value={email} type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => { setEmail(e.target.value) }} />
        </label>
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='Descrição do usuário' cols="30" rows="10" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>


        <input type="submit" value="enviar" />

      </form>
    </div>
  )
}

export default MyForm