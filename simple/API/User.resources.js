import {Map, List} from 'immutable';

const UserModel = new Map({
  username: '',
  status: '',
  task: '',
  location: {
    address: {
      city: ''
    }
  }
});

class UserInterface {
  constructor(data) {
    this._data = data;
  }

  get city() {
    return this._data.getIn(['location', 'address', 'city'], '');
  }
}

export const resources = [
  {
    id: 'USER_LIST',
    endpoint: '/users',
    model: new List()
  },
  {
    id: 'USER',
    endpoint: '/users/:username',
    model: UserModel,
    modelInterface: UserInterface
  },
];
