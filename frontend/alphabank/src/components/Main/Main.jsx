import React, { Children } from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";
import Login from "../Login/Login";


function Main(props) {
  return (
    <S.main image={props.image} imageSize={props.imageSize}>
        {props.children}
    </S.main>
  );
}

export default Main;