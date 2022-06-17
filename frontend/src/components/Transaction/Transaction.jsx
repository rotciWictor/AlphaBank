import React from 'react';
import Input from '../Input/Input'
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import * as S from "./style"


function Transaction() {
  return (
    <S.transaction>
      <div>
        <label>CPF</label>
        <Input placeholder="123.456.789-00" />
        <h3>ou</h3>
        <label>ID</label>
        <Input placeholder="010" />
        <h3>ou</h3>
        <label>Conta</label>
        <Input placeholder="03" />
      </div>
      <div>
        <label>Valor da Transferência</label>
        <Input placeholder="$ 1.000" />
        <ConfirmButton value="Confirmar" onClick=""/>
      </div>
    </S.transaction>
  );
}

export default Transaction;