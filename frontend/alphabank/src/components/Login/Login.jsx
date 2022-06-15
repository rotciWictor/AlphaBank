import React, { useContext } from "react";
import * as S from "./style";
import { Context } from "../../context/Context";

function Login() {
  let {navigate} = useContext(Context)
  return (
    <S.login>
      <h1>Faça seu login</h1>
      <S.input type="text" placeholder="CPF" />
      <S.input type="text" placeholder="SENHA" />
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
