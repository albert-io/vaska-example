import React from 'react';
import ReactDOM from 'react-dom';
import {setupAPI} from './API/simpleAPI';
import {UserList} from './Components/UserList.react';
import {UserCreateForm} from './Components/UserCreateForm.react';
import {Secret} from './Components/Secret.react';

class App extends React.Component {
  constructor() {
    super();
    setupAPI(() => this.forceUpdate());
  }

  render() {
    return (
      <div className='app'>
        <Secret />
        <UserList />
        <UserCreateForm />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('react-entry')
);
