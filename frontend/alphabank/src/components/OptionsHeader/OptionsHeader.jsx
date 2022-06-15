import React from 'react';
import * as S from "./style"

function OptionsHeader(props) {
  return (
    <S.optionsHeader>
      {props.children}
      <h2>{props.title}</h2>
    </S.optionsHeader>
  );
}

export default OptionsHeader;