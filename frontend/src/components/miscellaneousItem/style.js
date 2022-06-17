import Styled from "styled-components";

export const miscellaneousItem = Styled.div`

    display flex;
    flex-direction: column;
    justify-content:space-around;
    gap:3rem;
    align-items:center;
    background-color: white;
    height: 40vh;
    width: 80%;
    border-radius:0.4em;
    box-shadow: 0px 7px 11px 1px rgba(48,48,48,0.42);
    cursor: pointer;
    padding:3%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    overflow: scroll;
    padding: 0.2em 0.8em;

    p{
        color:#4A9C90;
        font-size:1rem;
        &:hover {
            color:green;
        }
    }
`;

