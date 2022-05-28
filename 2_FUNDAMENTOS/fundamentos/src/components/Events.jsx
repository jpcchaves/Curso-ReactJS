const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento");
  };

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
      </div>
    </div>
  );
};

export default Events;
