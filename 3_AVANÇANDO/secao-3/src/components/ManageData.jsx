import { useState } from "react";

const ManageData = () => {
  // Usando o HOOK
  // Use state na prática
  const [number, setNumber] = useState(15);  

  return <div className="container">
      <div>
          <p>Valor de {number}</p>
          <button onClick={() => setNumber(25)}>Mudar o State</button>  
      </div>
  </div>;
};

export default ManageData;
