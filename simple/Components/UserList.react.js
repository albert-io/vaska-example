import React from 'react';
import {getUser, getAllUsers} from '../API/User.interface';

export class User extends React.Component {
  render() {
    const user = getUser(this.props.username);
    const status = user.isFresh() ? user.data.get('status') : 'Loading status...';
    const task = user.isFresh() ? user.data.get('currentTask') : 'Loading task...';

    return (
      <div>
        <div>{this.props.username}</div>
        <div>{task}</div>
        <div>{status}</div>
        <div>{user.interface.city}</div>
      </div>
    )
  }
}

export class UserList extends React.Component {
  render() {
    const userList = getAllUsers().data;
    return (<div>
      {userList.map((user) => {
        return <User key={user.get('username')} username={user.get('username')} />
      })}
    </div>);
  }
}
