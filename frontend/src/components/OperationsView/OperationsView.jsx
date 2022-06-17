import React from 'react';
import * as S from "./style"

function OperationsView(props) {
  return (
    <S.operationsView>
      <h1>{props.title}</h1>
      {props.children}
    </S.operationsView>
  );
}

export default OperationsView;