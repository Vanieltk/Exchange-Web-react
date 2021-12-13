import react, {useState} from 'react';
import './App.css';
import Header from './Header.js';
import Listagem from './Listagem';
import UserLogin from './UserLogin';
import Grafico2 from './Grafico2';
import {ClienteContext} from "./ClienteContext"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";




function App() {
  const [dados, setDados]= useState({})

  return (
  <ClienteContext.Provider value={{dados, setDados}}>
  <Router>
    <Header />
      <Switch>
          <Route path="/" exact>
            <Listagem />
            </Route>
          <Route path="/login">
            <UserLogin/>
          </Route>
          <Route path= "/grafico">
            <Grafico2 />
          </Route>
        </Switch>
  </Router>
  </ClienteContext.Provider>
  );
}

export default App;
