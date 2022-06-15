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
    .search{
      padding-left:9px;
      width:30%;
      height:5vh;
      border-radius: 0.5em;
    }

    .help,.profile{
      width:fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap:5px;
      
    }

    .exit{
      all:unset;
      background-color: white;
      color:#2C7364;
      width:5%;
      height:5vh;
      text-align: center;
      border-radius:0.5em;
      font-weight:bold;


    }
`;

