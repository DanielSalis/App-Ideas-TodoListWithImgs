import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.4s;
    width: 30em;
    height: ${props => props.open ? '20em' : '3.4em'};
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background:#fff;
    margin: 1em 0 1rem 0;
    overflow:${props => props.open ? 'none' : 'hidden'};

    textarea{
        width:98%;
        height:13rem;
        resize:none;
    }  
`;

export const StatusBar = styled.div`
    background-color: ${props => props.finished ? '#00b894' : '#d63031'};
    width: 100%;
    height: 1em;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    justify-content:flex-end;
`;

export const InfoContainer = styled.div`
    width:100%;
    height:3rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin: 0 0 0.5rem 0;

    input{
        -webkit-appearance: none;
        outline:none;
        box-shadow:none;
        border-color:transparent;
    };
`;

export const ButtonsContainer = styled.div`
    width:100%;
    height:2.5rem;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:flex-end;

    button{
        margin:0 0.1rem;
        max-height:2rem;
    }
`;
