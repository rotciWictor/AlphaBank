import React from 'react';
import * as S from "./style";

function OperationBox(props) {
  return (
    <S.OperationBox onClick={props.onClick}>
        <h4>{props.title}</h4>
        {props.children}
    </S.OperationBox>

  );
}

export default OperationBox;