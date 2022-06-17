import { createGlobalStyle } from "styled-components";

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
      display:flex;
      justify-content:center;
      align-items:center;
      gap:10px;
    }

    .closeaccount{
      text-align:center;
    }

  figure {
  display: inline-block;
  position: relative;
}

.name-card {
  position: absolute;
  right: 14rem;
  font-size: 2rem;
  color: white;
  text-shadow: 0px 0px 5px black;
  bottom: 10rem;
}

.number-card {
  position: absolute;
  bottom: 5rem;
  right: 20rem;
  font-size: 2rem;
  color: white;
  text-shadow: 0px 0px 5px black;
}

.valid-thru{
  position: absolute;
  bottom: 8rem;
  right: 40rem;
  font-size: 0.6rem;
  color: white;
  text-shadow: 0px 0px 5px black;
}
`;


