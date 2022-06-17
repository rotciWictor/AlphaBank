import React, { useContext } from "react";
import * as S from "./style";
import { Context } from "../../context/Context";

function Login() {
  const { navigate, cpf, password, setCpf, setPassword, login} = useContext(Context)
  return (
    <S.login>
      <h1>Faça seu login</h1>
      <S.input type="text" placeholder="CPF" value={cpf} onInput={(event)=>{setCpf(event.target.value)}}/>
      <S.input type="text" placeholder="SENHA" value={password} onInput={(event)=>{setPassword(event.target.value)}} />
      <S.button type="button" value="CONTINUAR" onClick={() => {
        const cpfFormat = /\d{11}/;
        const passwordFormat = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/;
        let testCpf = cpfFormat.test(cpf);
        let testPassword = passwordFormat.test(password);
        if(testPassword === true && testCpf === true) {
          login()
        } else {
          console.log('Os dados não foram inseridos corretamente');
        }
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
