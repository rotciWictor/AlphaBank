import Styled from "styled-components";

export const main = Styled.main`

    height:${(props)=> props.imageSize};
    background-image: url(${(props)=>props.image}); 
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    align-items: center;
    

`;

export const logo = Styled.img`

    height: 45vh;

`;