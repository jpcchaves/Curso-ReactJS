import React from 'react'

const UserDetails = ({id, name, age, job}) => {
  return (
    <div>
      <ul>
          <h1>{name}</h1>
          <li>Idade: {age} anos.</li>
          <li>Profissão: {job}</li>
          {age >= 18 ? (<li>Pode tirar a CNH</li>) : (<li>Não pode tirar a CNH</li>)}
      </ul>
    </div>
  )
}

export default UserDetails
