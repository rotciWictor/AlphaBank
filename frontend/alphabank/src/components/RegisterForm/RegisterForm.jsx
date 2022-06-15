import React from "react";
import * as S from "./style";

function RegisterForm() {
  return (
    <S.register>
      <h1>Vamos Começar?</h1>
      <S.input type="text" placeholder="NOME COMPLETO" />
      <S.input type="text" placeholder="CPF" />
      <S.input type="text" placeholder="DATA DE NASCIMENTO" />
      <S.input type="text" placeholder="SENHA" />
      <S.input type="text" placeholder="CONFIRME SUA SENHA" />
      <S.button type="button" value="CONTINUAR" />
    </S.register>
  );
}

export default RegisterForm;
