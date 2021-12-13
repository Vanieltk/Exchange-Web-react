import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ClienteContext } from "./ClienteContext";
import { useHistory } from "react-router-dom";
import "./Header.css"

const Header = () => {

  const cliente = useContext(ClienteContext)
  let history = useHistory();

  const loginLogout = () => {
    cliente.setDados({id: null, nome: "", token: ""});
    history.push("/login")
  }
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <Link  className="navbar-brand" to="/">
          <img
            src="logo192.png"
            alt="Exchange Cripto Facil"
            width="80"
            className="float-left mr-2"
          />
          <h3>Exchange Cripto Facil</h3>
          <h5>Moedas em Destaque</h5>
        </Link>
  
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/grafico">
          Gráfico
        </Link>
        </li>
          <li className="nav-item">
            <span className="nav-link" onClick={loginLogout}>
              <i className="fas fa-user-friends mr-2"></i>
              { cliente.dados.nome ? cliente.dados.nome + "-Sair" :"Login"}
            </span>
          </li>
        </ul>
      </nav>
    );
}

export default Header;