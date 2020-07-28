import React, { Component } from 'react';
import { ToDoContainer } from './style';

class ToDo extends Component {
    render() {
        return (
            <ToDoContainer>
                <div>
                    <input placeholder="Title"></input>
                    <input placeholder="Description"></input>
                    <textarea rows="5" cols="33" style={{ resize: 'none' }}></textarea>
                </div>
            </ToDoContainer>
        );
    }
}

export default ToDo;
