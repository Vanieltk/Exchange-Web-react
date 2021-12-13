import React, {useState, useEffect} from "react";
import Conecta from "./Conecta";
import ItemLista from "./ItemLista";


const Listagem = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [moedas, setMoedas] = useState([]);

  const setSearch = (palavra) => {
    setPesquisa(palavra)
    //let clubes = lista.data;
      if(pesquisa.length > 1){
        let newLista = moedas.filter((moeda) => moeda.moeda.toLowerCase().includes(pesquisa.toLowerCase()))
        console.log(newLista)
        setMoedas(newLista)
        
  
      }else{
        getMoedas();
      }
    }

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
      <input
          type="text"
          className="form-control"
          value={pesquisa}
          onChange={(ev) =>setSearch(ev.target.value)}
          autoFocus/>,
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