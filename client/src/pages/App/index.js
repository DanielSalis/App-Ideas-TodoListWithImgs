import React, { Component } from 'react';
import { ToDoContainer, ToDoStatusBar } from './style';
import ToDo from '../../components/ToDo';
import api from '../../components/Api';

import { bindActionCreators } from 'redux';
import { Actions as TodoActions } from '../../store/ducks/todo';
import { connect } from 'react-redux';

class MainApp extends Component {
    state = {
        user: this.props.auth.user,
    }

    componentWillMount = async () => {

        await api.get(`/todo/getAll/${this.state.user.cd_user}`)
            .then((res) => {
                this.props.TodoActions.setAllTodos(res.data.todos);
            });
        console.log(this.props);
    }

    renderTodos = () => {
        let todos = this.props.todo.list.map((item) => {
            return (
                <ToDo open={false} finished={false} title={item.title} description={item.description} text={''} />
            )
        });
        return todos;
    }

    render() {
        return (
            <ToDoContainer>
                {this.props.todo.list ? this.renderTodos() : <></>}
            </ToDoContainer>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    todo: state.todo
});

const mapDispatchToProps = dispatch => ({
    TodoActions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
