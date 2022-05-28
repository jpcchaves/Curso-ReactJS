const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
      if(x){

        return <h1>Renderizando isso</h1>

      } else {
        return <h1>Também posso renderizar isso!</h1>
      }
  }

  return (
    <div className="component">
      <div>
        <button onClick={handleMyEvent}>Clique aqui </button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>
          Clique aqui também
        </button>
      </div>
      <div>
          <button onClick={() => {
              if(true){
                  console.log(`Isso não deveria existir kk`)
              }
          }}>Duvido você clicar aqui</button>
          {renderSomething(true)}
          {renderSomething(false)}
      </div>
    </div>
  );
};

export default Events;
