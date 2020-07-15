import React from 'react';
import { Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { RegisterContainer, RergisterBox } from './style';
import { secondaryTheme } from '../../media';

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
    name: "",
    lastName: "",
    email: "",
    password: ""
}

const Register = () => {

    const [formData, updateFormData] = React.useState(initialFormData)

    const handleInputChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmmit = async (e) => {
        e.preventDefault();
        const res = await api.post('/users/create', formData);
        console.log(res);
        console.log(formData);
    }

    return (
        <RegisterContainer>
            <RergisterBox>
                <div className="nameContainer">
                    <input type="text" name="name" onChange={handleInputChange} placeholder="Name"></input>
                    <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last Name"></input>
                </div>
                <input type="text" name="email" onChange={handleInputChange} placeholder="Email"></input>
                <input type="password" name="password" onChange={handleInputChange} placeholder="Password"></input>
                <ThemeProvider theme={theme}>
                    <Button onClick={handleSubmmit} disableElevation={true}>Sign Up</Button>
                </ThemeProvider>
            </RergisterBox>
        </RegisterContainer>
    );

}

export default Register;
