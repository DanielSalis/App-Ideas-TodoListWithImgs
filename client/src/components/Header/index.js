import React, { Component } from 'react';
import { FiSettings } from 'react-icons/fi';
import { HeaderContainer, HeaderContent, HeaderLine } from './style.js';
import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { Actions as AuthActions } from '../../store/ducks/auth';
import { connect } from 'react-redux';

class Header extends Component {

    logout = () => {
        localStorage.removeItem('authToken');
        localStorage.clear();

        this.props.AuthActions.logout();

        return this.props.history.push({
            pathname: `/`
        });
    }

    render() {
        const { user } = this.props.auth;

        return (
            <HeaderContainer>
                <HeaderLine />
                <HeaderContent>
                    <p>todo app</p>

                    {user &&
                        <>
                            <p>Welcome {user.first_name} {user.last_name} </p>
                            <div class="dropdown">
                                <FiSettings />
                                <div class="dropdown-content">
                                    <span >Settings</span>
                                    <span onClick={() => { this.logout() }}>Logout</span>
                                </div>
                            </div>
                        </>
                    }
                </HeaderContent>
            </HeaderContainer>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    AuthActions: bindActionCreators(AuthActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));