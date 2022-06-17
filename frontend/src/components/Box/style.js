import Styled from "styled-components";

export const OperationBox = Styled.div`

    display:flex;
    justify-content: center;
    align-items: flex-start;
    font-size:1.75em;
    background-color: white;
    height: 35vh;
    width: 45%;
    border-radius:0.4em;
    box-shadow: 0px 7px 11px 1px rgba(48,48,48,0.42);
    cursor: pointer;
    padding:2%;
    flex-wrap:wrap;

    h4 {
        width: 100%;
        text-align:center;
    }


    &:hover {
            color:green;
    }

`;