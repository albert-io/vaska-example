import {Map, List} from 'immutable';

const SecureModel = new Map({
  secret: ''
});

export const resources = [
  {
    id: 'SECURE',
    endpoint: '/secure',
    model: new Map({
      secret: ''
    }),
    authRequired: true
  }
];
