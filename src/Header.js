import React from "react";
import "./Header.css"

const Header = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary ">
        <span className="navbar-brand">
          <img
            src="logo192.png"
            alt="Exchange Cripto Facil"
            width="80"
            className="float-left mr-2"
          />
          <h3>Exchange Cripto Facil</h3>
          <h5>Moedas em Destaque</h5>
        </span>
  
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span className="nav-link">
              <i className="fas fa-user-friends mr-2"></i>
            </span>
          </li>
        </ul>
      </nav>
    );
}

export default Header;