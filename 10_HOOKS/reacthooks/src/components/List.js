import { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [myItens, setMyItems] = useState([]);

  useEffect(() => {
    console.log("buscando dados no db...");

    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>{myItens && myItens.map((item) => (<p key={item}>{item}</p>))}</div>
  );
};

export default List;
