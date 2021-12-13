import React, {useState, useEffect} from "react";
import Conecta from "./Conecta";
import ItemLista from "./ItemLista";

const Listagem = () => {
  const [moedas, setMoedas] = useState([]);

  const getMoedas = async () => {
    const lista = await Conecta.get("moedas");
    console.log(lista);
    setMoedas(lista.data);
  };

  // define o método que será executado após renderizar o componente
  useEffect(() => {
    getMoedas();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {moedas.map((moeda, index) => (
          <ItemLista
            foto={moeda.foto}
            modelo={moeda.moeda}
            marca={moeda.tipo}
            preco={moeda.preco}
            key={moeda.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Listagem;