import * as S from "./style";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

function RegisterForm() {
  let { navigate } = useContext(Context);
  return (
    <S.register>
      <h1>Vamos Começar?</h1>
      <S.input type="text" placeholder="NOME COMPLETO" />
      <S.input type="text" placeholder="CPF" />
      <S.input type="date" placeholder="DATA DE NASCIMENTO" />
      <S.input type="text" placeholder="SENHA" />
      <S.input type="text" placeholder="CONFIRME SUA SENHA" />
      <S.button
        type="button"
        value="CONTINUAR"
        onClick={() => {
          navigate("/Logged");
        }}
      />
    </S.register>
  );
}

export default RegisterForm;
