import React, { useContext } from 'react';
import Input from '../Input/Input'
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import * as S from "./style"
import { Context } from '../../context/Context';

function Transaction() {
  const { cpfDest, setCpfDest, amount, setAmount, transfer } = useContext(Context);

  return (
    <S.transaction>
      <div>
        <Input label="CPF" placeholder="123.456.789-00" value={cpfDest} onInput={(e) => setCpfDest(e.target.value)} />
        <h3>ou</h3>
        <Input label="ID" placeholder="010" />
        <h3>ou</h3>
        <Input label="Conta" placeholder="03" />
      </div>
      <div>
        <Input label="Valor da Transferência" placeholder="$ 1.000" value={amount} onInput={(e)=>setAmount(parseFloat(e.target.value))}/>
        <ConfirmButton value="Confirmar" onClick={()=>transfer()} />
      </div>
    </S.transaction>
  );
}

export default Transaction;