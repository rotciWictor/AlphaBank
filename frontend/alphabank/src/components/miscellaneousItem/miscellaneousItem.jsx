import React from 'react';
import * as S from "./style";


function miscellaneousItem(props) {
  return (
    <S.miscellaneousItem>
        {props.title}
        {props.children}
    </S.miscellaneousItem>

  );
}

export default miscellaneousItem;