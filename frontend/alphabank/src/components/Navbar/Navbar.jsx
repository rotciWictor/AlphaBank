import React from "react";
import * as S from "./style";

function Navbar(props) {
  return (
    <S.navBar>
      {props.children}
    </S.navBar>
  );
}

export default Navbar;
