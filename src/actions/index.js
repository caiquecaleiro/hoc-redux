import { CHANGE_AUTH } from './types';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    paylod: isLoggedIn
  };
}