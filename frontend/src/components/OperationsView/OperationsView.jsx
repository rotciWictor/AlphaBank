import React from 'react';
import * as S from "./style"

function OperationsView(props) {
  return (

    <S.operationsView>
        {props.title}
        {props.children}
    </S.operationsView>


  );
}

export default OperationsView;