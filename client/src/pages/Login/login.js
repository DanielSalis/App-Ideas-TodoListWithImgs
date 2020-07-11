import React, { Component } from 'react';
import { FiList } from 'react-icons/fi';
import { Input, Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { LoginContainer, LoginBox } from './style';
import { secondaryTheme } from '../../media';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                background: secondaryTheme,
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    },
});

class Login extends Component {
    render() {
        return (
            <LoginContainer>
                <LoginBox>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Senha"></input>
                    <ThemeProvider theme={theme}>
                        <Button disableElevation={true}>login</Button>
                    </ThemeProvider>
                </LoginBox>
            </LoginContainer>
        );
    }
}

export default Login;