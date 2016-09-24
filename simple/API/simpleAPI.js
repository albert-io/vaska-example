import vaska from 'vaska';
import {resources as UserResources} from './User.resources';
import {resources as SecretResources} from './Secure.resources';

const allResources = UserResources.concat(SecretResources);
export let simpleAPI = null;

export function setupAPI(hook) {
  simpleAPI = new vaska.ExternalAPI({
    location: 'http://localhost:3000',
    postResponseHook: hook
  });

  allResources.forEach((resource) => {
    simpleAPI.addResource(resource);
  })
}

export function setAuth(token) {
  simpleAPI.setAuthHeader({Authorization: token})
}
