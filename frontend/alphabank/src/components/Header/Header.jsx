import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg"

function Header(props) {
  return (
    <S.header>
      <S.logo src={logo} />
      {props.children}

    </S.header>
  );
}

export default Header;
