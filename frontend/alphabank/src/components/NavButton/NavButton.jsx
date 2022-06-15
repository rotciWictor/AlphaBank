import React from 'react';
import * as S from "./style";

function NavButton(props) {
return (
  <S.navButton>
    {props.children}
    {props.title}
  </S.navButton>
);
}

export default NavButton;