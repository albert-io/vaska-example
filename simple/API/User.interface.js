import {Map} from 'immutable';
import {simpleAPI} from './simpleAPI';

export function getUser(username) {
  return simpleAPI.queryResource({
    id: 'USER',
    params: {
      username: username
    }
  });
}

export function getAllUsers() {
  return simpleAPI.queryResource({
    id: 'USER_LIST'
  })
}

export function updateUser({username, update}) {
  return simpleAPI.queryResource({
    id: 'USER',
    params: {
      username: username
    },
    payload: update,
    method: 'put'
  });
}

export function createUser(user) {
  return simpleAPI.queryResource({
    id: 'USER_LIST',
    payload: user,
    method: 'post'
  }).invalidatesResource('USER_LIST');
}
