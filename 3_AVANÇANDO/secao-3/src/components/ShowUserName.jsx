import React from 'react'

const ShowUserName = (props) => {
    const name = props.name
  return (
    <div>
      <h2>O nome do usuário é: {name}</h2>
    </div>
  )
}

export default ShowUserName
