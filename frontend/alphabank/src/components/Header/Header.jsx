import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg"
import HeaderButton from "../headerButton/headerButton";

function Header() {
  return (
    <S.header>
      <S.logo src={logo} />
      <HeaderButton title="Cadastre-se" />

    </S.header>
  );
}

export default Header;
