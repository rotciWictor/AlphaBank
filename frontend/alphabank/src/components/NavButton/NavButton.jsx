import React from 'react';
import * as S from "./style";

function NavButton(props) {
return (
  <S.navButton onClick={props.onClick}>
    {props.children}
    {props.title}
  </S.navButton>
);
}

export default NavButton;