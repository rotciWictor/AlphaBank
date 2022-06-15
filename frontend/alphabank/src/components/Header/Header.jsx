import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg"
import HeaderButton from "../headerButton/headerButton";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate()
  return (
    <S.header>
      <S.logo src={logo} />
      {props.children}

    </S.header>
  );
}

export default Header;
