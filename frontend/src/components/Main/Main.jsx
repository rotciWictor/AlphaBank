import React from "react";
import * as S from "./style";


function Main(props) {
  return (
    <S.main image={props.image} imageSize={props.imageSize}>
        {props.children}
    </S.main>
  );
}

export default Main;