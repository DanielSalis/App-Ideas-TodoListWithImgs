import styled from 'styled-components';
import { primaryTheme } from '../../media';

export const LoginContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export const LoginBox = styled.div`
    width:40%;
    height:50%;
    background-color: ${primaryTheme};
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    input{
        width: 50%;
        height:3em;
        outline: none;
        border: none;
        border-radius:2px;
        margin: 0.5em;
        padding: 0 0.2em;
    }

    button{
        margin:0.5em;
    }

    .text-link{
        color:#fff;
        font-size: 0.8em;
        cursor: pointer;
    }

`;