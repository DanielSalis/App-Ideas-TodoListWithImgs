
import styled from 'styled-components';
import { media, primaryTheme } from '../../media';

export const RegisterContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export const RergisterBox = styled.div`
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

        ${media.mobile`
            width: 60%;
        `}
    }

    button{
        margin:0.5em;
    }

    .nameContainer{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
        width: 51%;
        height:3.1em;

        input{
            width: 45%;
            margin: 0 0.1em 0 0;
            ${media.mobile` 
                width:100%;
                margin: 0.5em;
            `};
        }

        ${media.mobile` 
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            width: 60%;
            height:auto;
        `};
        
    }

    .text-link{
        color:#fff;
        font-size: 0.8em;
        cursor: pointer;
    }


    ${media.mobile`
        width:95%
    `}

`;