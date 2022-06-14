import React from 'react';
import * as S from "./style";
import { BiLogInCircle } from "react-icons/bi";

function headerButton(props) {
  return (
    <S.headerButton>
      <S.title>{props.title}</S.title>
      <BiLogInCircle size={38} />
    </S.headerButton>
  );
}

export default headerButton;