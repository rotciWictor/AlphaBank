import React from 'react';
import * as S from "./style";

function NavButton(props) {
return (
  <S.navButton>
    <h2>{props.children}</h2>
    {props.title}
  </S.navButton>
);
}

export default NavButton;