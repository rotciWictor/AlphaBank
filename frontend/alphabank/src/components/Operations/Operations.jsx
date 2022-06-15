import React from 'react';
import * as S from "./style";

function Operations(props) {
  return (
    <S.Operations>
      {props.children}
    </S.Operations>
  );
}

export default Operations;