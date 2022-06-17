import React from 'react';
import * as S from "./style"

function ConfirmButton(props) {
  return (

    <S.ConfirmButton type="button" value={props.value} onClick={props.onClick}/>

  );
}

export default ConfirmButton;