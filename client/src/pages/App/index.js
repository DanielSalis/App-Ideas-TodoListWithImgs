import React, { Component } from 'react';
import { ToDoContainer, ToDoStatusBar } from './style';
import ToDo from '../../components/ToDo';

class MainApp extends Component {
    render() {
        return (
            <ToDoContainer>
                <ToDo open={false} finished={true} text={'      ######    DESENHO    ######'}></ToDo>
                <ToDo open={false} finished={false} ></ToDo>
                <ToDo open={false} finished={false} ></ToDo>
                <ToDo open={false} finished={false} ></ToDo>
                <ToDo open={false} finished={false} ></ToDo>
                <ToDo open={false} finished={false} ></ToDo>
                <ToDo open={false} finished={false} ></ToDo>
            </ToDoContainer>
        );
    }
}

export default MainApp;
