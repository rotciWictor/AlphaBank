import React from 'react';
import * as S from "./style";

function OperationBox(props) {
  return (
    <S.OperationBox>
        {props.title}
        {props.children}
    </S.OperationBox>

  );
}

export default OperationBox;