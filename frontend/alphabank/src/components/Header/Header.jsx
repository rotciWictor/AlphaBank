import React from "react";
import * as S from "./style";
import { AiOutlineUserAdd } from "react-icons/ai";
import logo from "../../images/logo.svg"

function Header() {
  return (
    <S.header>
      <S.logo src={logo} />
      <S.div>
        <S.register>Cadastre-se</S.register>
        <AiOutlineUserAdd size={38} />
      </S.div>
    </S.header>
  );
}

export default Header;
