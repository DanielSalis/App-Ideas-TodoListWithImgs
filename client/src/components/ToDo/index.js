import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Button } from '@material-ui/core';
import { secondaryTheme } from '../../media';
import { Container, StatusBar, InfoContainer, ButtonsContainer } from './style';

const ToDo = (props) => {
    const { finished, text } = props;
    const [open, setOpen] = useState(props.open);

    return (
        <Container open={open}>
            <StatusBar onClick={() => setOpen(!open)} finished={finished}>
                {open ? <FiChevronDown color={'#fff'} onClick={() => setOpen(false)} /> : <FiChevronUp color={'#fff'} onClick={() => setOpen(true)} />}
            </StatusBar>
            <InfoContainer>
                <input disabled={!open} placeholder="Title"></input>
                <input disabled={!open} placeholder="Description"></input>
            </InfoContainer>
            {open &&
                <textarea>{text}</textarea>
            }
            {open &&
                <ButtonsContainer>
                    <Button variant="outlined" disableElevation={true} style={{ borderColor: secondaryTheme, color: secondaryTheme }}>Save</Button>
                    <Button variant="outlined" disableElevation={true} style={{ borderColor: '#d63031', color: "#d63031" }}>Delete</Button>
                </ButtonsContainer>
            }
        </Container >
    );
}

export default ToDo;