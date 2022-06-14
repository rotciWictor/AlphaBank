import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";
import Login from "../Login/Login";


function Main() {
  return (
    <S.main>
        <S.logo src={logo} />
        <Login />
    </S.main>
  );
}

export default Main;