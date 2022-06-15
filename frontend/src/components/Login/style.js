import Styled from "styled-components";

export const login = Styled.main`
    
    all: unset;
    height:60vh;
    width:55vh;
    border:1px solid green;
    background-color:white;
    border-radius:2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 

`;

export const input = Styled.input`

    all:unset;
    border-bottom: 1px solid green;
    width: 70%;
`;

export const button = Styled.input`

    all:unset;
    background-color: #4A9C90;
    border-radius: 0.7em;
    color: black;
    height: 8vh;
    width: 70%;
    text-align: center;
    font-size:1em;
    cursor: pointer;

`;

export const links = Styled.input`

    all:unset;
    color: #007364;
    cursor: pointer;

`;

export const div = Styled.div`
    display: flex;
    flex-direction: column;
    height:5vh;
    justify-content:space-between;

`