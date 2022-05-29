import { useState } from "react"

function ConditionalRender() {
  const [x] = useState(false);

  const [name, setName] = useState('Zezinho')
  
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se "x" for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}

        {/* Condição ternária */}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrando</p>
            </div>
        )}
        <button onClick={() => setName('João')}>Clique   aqui!</button>
    </div>
  )
}

export default ConditionalRender
