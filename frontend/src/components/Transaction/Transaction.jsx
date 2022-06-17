import React from 'react';
import Input from '../Input/Input'
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import * as S from "./style"


function Transaction() {
  return (
    <S.transaction>
      <div>
        <Input label="CPF" placeholder="123.456.789-00" />
        <h3>ou</h3>
        <Input label="ID" placeholder="010" />
        <h3>ou</h3>
        <Input label="Conta" placeholder="03" />
      </div>
      <div>
        <Input label="Valor da Transferência" placeholder="$ 1.000" />
        <ConfirmButton value="Confirmar" onClick="" />
      </div>
    </S.transaction>
  );
}

export default Transaction;