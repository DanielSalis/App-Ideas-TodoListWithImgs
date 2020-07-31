import styled from 'styled-components';
import { media, primaryTheme, secondaryTheme } from '../../media';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0277bd;
    color: #fff;
`;

export const HeaderLine = styled.div`
    width: 100%;
    height: 30%;
    background-color: #004c8c;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
    height: 70%;
    align-items: center;
    justify-content: space-between;

    p{
        margin: 0 0 0 0.5em;
    }

    svg{
        margin: 0 0.5em 0 0
    }

    .dropdown {
        overflow: hidden;
    }

    .dropdown .dropbtn {
        font-size: 5px;  
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
    }

    .dropdown-content {
        text-align-last:right;
        display: none;
        position: absolute;
        right:0;
        background-color: #f9f9f9;
        min-width: 120px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content span {
        font-size:15px;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content span:hover {
        background-color: ${secondaryTheme};
        color:#fff;
        cursor: pointer;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
`;
