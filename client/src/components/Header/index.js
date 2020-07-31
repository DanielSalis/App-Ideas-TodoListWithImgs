import React, { Component } from 'react';
import { FiSettings } from 'react-icons/fi';
import { HeaderContainer, HeaderContent, HeaderLine } from './style.js';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    state = {
        user: {}
    }

    logout = () => {
        localStorage.removeItem('authToken');
        localStorage.clear();
        return this.props.history.push({
            pathname: `/`
        });
    }

    render() {
        return (
            <HeaderContainer>
                <HeaderLine />
                <HeaderContent>
                    <p>todo app</p>

                    <p>Hello {this.state.user.first_name}</p>
                    <div class="dropdown">
                        <FiSettings />
                        <div class="dropdown-content">
                            <span >Settings</span>
                            <span onClick={() => { this.logout() }}>Logout</span>
                        </div>
                    </div>

                </HeaderContent>
            </HeaderContainer>
        );
    }
}

export default withRouter(Header);