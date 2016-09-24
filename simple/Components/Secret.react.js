import React from 'react';
import {getSecret} from '../API/Secure.interface';
import {setAuth} from '../API/simpleAPI';

export class Secret extends React.Component {
  setToken() {
    const token = this.refs.tokenEntry.value;
    setAuth(token);
  }

  render() {
    const secret = getSecret();
    const content = secret.isValid() ? <img src={secret.data.get('secret')} /> : null;

    return (
      <div>
        <input ref='tokenEntry' type='text' />
        <button onClick={this.setToken.bind(this)}>Set Token</button>
        {content}
      </div>
    )
  }
}
