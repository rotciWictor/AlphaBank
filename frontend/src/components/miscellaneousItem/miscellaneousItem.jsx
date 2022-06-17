import React from 'react';
import * as S from "./style";


function miscellaneousItem(props) {
  return (
    <S.miscellaneousItem>
      <h3>{props.title}</h3>
      {props.children}
    </S.miscellaneousItem>
  );
}

export default miscellaneousItem;