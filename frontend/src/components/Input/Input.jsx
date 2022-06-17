import React from 'react';
import * as S from "./style"

function Input(props) {
  return (
    <S.div>
      <S.label>{props.label}</S.label>
      <S.input />
    </S.div>
  );
}

export default Input;