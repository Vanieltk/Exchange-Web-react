import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Conecta from "./Conecta";
import { ClienteContext } from "./ClienteContext";

import "./UserLogin.css"

const UserLogin = () =>{
  const {
    register,
    handleSubmit,
  } = useForm();

  let history = useHistory()
  const cliente = useContext(ClienteContext);

  const onSubmit = async (data) => {
    const login = await Conecta.post("login", data)

    console.log(login)

    if(login.data.id){
      cliente.setDados({id:login.data.id, nome:login.data.nome, token:login.data.token})
      history.push("/")
    }else{
      console.log("erro...")
      
    }
  };

    return (
      <div className="row mt-5">
        <div  className="col-md-5 col-sm-8 col-11 mx-auto">
        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
  <div className="text-center mb-4">
    <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
    <p>Avalie Agora Nossas Moedas</p>
  </div>

  <div className="form-label-group">
    <input type="email" id="email" className="form-control" placeholder="Email do Cliente" required autoFocus {...register("email")} />
    <label htmlFor="email">Email </label>
  </div>

  <div className="form-label-group">
    <input type="password" id="senha" className="form-control" placeholder="Senha" required  {...register("senha")}/>
    <label htmlFor="senha">Senha</label>
  </div>

  <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
</form>
</div>

</div>

    )
}

export default UserLogin;