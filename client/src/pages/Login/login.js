import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { LoginContainer, LoginBox } from './style';
import { secondaryTheme } from '../../media';
import { useHistory } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { Actions as AuthActions } from '../../store/ducks/auth';
import { connect } from 'react-redux';

import api from '../../components/Api';

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

const initialFormData = {
    email: '',
    password: ''
}

const Login = (props) => {
    let history = useHistory();

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleInputChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmmit = async (e) => {
        e.preventDefault();
        await api.post('/auth/', formData)
            .then(async (res) => {
                localStorage.setItem('authToken', res.data.token);
                await api.get('/auth', {
                    headers: {
                        'x-auth-token': localStorage.getItem('authToken')
                    }
                })
                    .then(async (res) => {
                        localStorage.setItem('userLogged', JSON.stringify(res.data));
                        await props.AuthActions.loginSuccess(res.data);
                        history.push('/todo');
                    })
            })
            .catch(() => {
                alert('Invalid Credentials');
            });
    }

    return (
        <LoginContainer>
            <LoginBox>
                <input type="text" onChange={handleInputChange} name="email" placeholder="Email"></input>
                <input type="password" onChange={handleInputChange} name="password" placeholder="Password"></input>
                <ThemeProvider theme={theme}>
                    <Button onClick={handleSubmmit} disableElevation={true}>login</Button>
                </ThemeProvider>
                <Link to="/register"><p className="text-link"><u>sign up</u></p></Link>
            </LoginBox>
        </LoginContainer>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    AuthActions: bindActionCreators(AuthActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);