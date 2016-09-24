import {Map} from 'immutable';
import {simpleAPI} from './simpleAPI';

export function getSecret() {
  return simpleAPI.queryResource({
    id: 'SECURE'
  });
}
