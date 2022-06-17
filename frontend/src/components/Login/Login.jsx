import React, { useContext } from "react";
import { Context } from "../../context/Context";
import * as S from "./style";

function Login() {
  const { navigate, cpf, setCpf, password, setPassword } = useContext(Context)

  return (
    <S.login>
      <h1>Faça seu login</h1>
      <S.input type="text" placeholder="CPF" value={cpf} onInput={(e)=>setCpf(e.target.value)}/>
      <S.input type="text" placeholder="SENHA" value={password} onInput={(e)=>setPassword(e.target.value)} />
      <S.button
        type="button"
        value="CONTINUAR"
        onClick={() => {
          navigate("/Logged");
        }}
      />
      <S.div>
        <S.links type="button" value="Esqueci minha senha >" />
        <S.links
          type="button"
          value="Ainda não sou cliente >"
          onClick={() => {
            navigate("/Register");
          }}
        />
      </S.div>
    </S.login>
  );
}

export default Login;
