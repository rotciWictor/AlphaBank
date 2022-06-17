import React from "react";
import * as S from "./style";
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";

function RegisterForm() {
  const { cpf, setCpf, name, setName, birthday, setBirthday, password, setPassword, secondPassword, setSecondPassword, register } = useContext(Context);
  //const cpfJoin = cpfMask.match(cpfRegex).join("");
  const nameFormat = /^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/;
  const cpfFormat = /\d{11}/;
  const passwordFormat = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/;
  let testName = nameFormat.test(name);
  let testCpf = cpfFormat.test(cpf);
  let testPassword = passwordFormat.test(password);
  let testSecondPassword = passwordFormat.test(secondPassword);
  let hasError = true;
  if(secondPassword === password) {
    if (testName === true && testCpf === true && testSecondPassword === true && testPassword === true) {
      hasError = false;
    }
    else {
      console.log("As informações foram inseridas incorretamente");
    }
  } else {
    console.log("As senhas não são iguais");
  }
  return (
    <S.register>
      <h1>Vamos Começar?</h1>
      <S.input type="text" placeholder="NOME COMPLETO" value={name} onInput={(event)=>{setName(event.target.value)}} />
      <S.input type="text" placeholder="CPF" value={cpf} onInput={(event)=>{setCpf(event.target.value)}} />
      <S.input type="text" placeholder="DATA DE NASCIMENTO" value={birthday} onInput={(event)=>{setBirthday(event.target.value)}} />
      <S.input type="password" placeholder="SENHA" value={password} onInput={(event)=>{setPassword(event.target.value)}}/>
      <S.input type="password" placeholder="CONFIRME SUA SENHA" value={secondPassword} onInput={(event)=>{setSecondPassword(event.target.value)}} />
      <S.button type="button" value="CONTINUAR" onClick={register} disabled={hasError}/>
    </S.register>
  );
}

export default RegisterForm;
