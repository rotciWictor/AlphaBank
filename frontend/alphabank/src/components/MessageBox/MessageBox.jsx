import React from "react";
import * as S from "./style";

function MessageBox(props) {
  return (
    <S.MessageBox>
        {props.children}
    </S.MessageBox>
    );
}

export default MessageBox;
