import Styled from "styled-components";

export const transaction = Styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 85%;
    width: 90%;
    //border: 1px solid red;

    div{
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items:center;
        height: 80%;
        width: 90%;
        //border: 1px solid red
    }

    h3{
        font-size: 1.2rem;
        color: #4A9C90;
    }
`;