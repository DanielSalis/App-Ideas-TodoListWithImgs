import React, { Component } from 'react';
import { FiSettings } from 'react-icons/fi';
import { HeaderContainer, HeaderContent, HeaderLine } from './style.js';

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <HeaderLine />
                <HeaderContent>
                    <p>todo app</p>
                    <FiSettings />
                </HeaderContent>
            </HeaderContainer>
        );
    }
}

export default Header;