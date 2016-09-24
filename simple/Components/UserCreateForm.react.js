import React from 'react';
import {createUser} from '../API/User.interface';

export class UserCreateForm extends React.Component {
  processCreate() {
    const user = {
      username: this.refs.username.value,
      currentTask: this.refs.task.value,
      status: 'active'
    };

    createUser(user).promise.then(() => {
      this.refs.notificationArea.innerHTML = 'Successfully created';
    }).catch((err) => {
      this.refs.notificationArea.innerHTML = 'Could not create user!';
    });
  }

  render() {
    return (<div>
      <div ref='notificationArea'></div>
      <div>Username: <input ref='username' type='text' /></div>
      <div>Task: <input ref='task' type='text' /></div>
      <button onClick={this.processCreate.bind(this)}>Create</button>
    </div>);
  }
}
