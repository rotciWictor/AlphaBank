import React from "react";
import * as S from "./style";

function Login() {
  return (
    <S.login>
      <h1>Faça seu login</h1>
      <S.input type="text" placeholder="CPF" />
      <S.input type="text" placeholder="SENHA" />
      <S.button type="button" value="CONTINUAR" />
      <S.div>
        <S.links type="button" value="Esqueci minha senha >" />
        <S.links type="button" value="Ainda não sou cliente >" />
      </S.div>
    </S.login>
  );
}

export default Login;
