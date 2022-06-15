import Styled, { createGlobalStyle } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import lupa from "../images/lupa.svg";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>;

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    .papagaio{
      width:46%;
    }

    .div{
      display: flex;
      justify-self: center;
      align-self: center;
      gap: 20px;
      width: 100%
    }
`;

