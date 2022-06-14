import Styled from "styled-components";
import image from "../../images/loginPageImage.png"

export const main = Styled.main`

    height:80vh;
    background-image: url(${image}); 
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    align-items: center;
    

`;

export const logo = Styled.img`

    height: 45vh;

`;