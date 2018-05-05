import axios from 'axios';

const serverUrl = 'http://localhost:3000';

export function login(credentials) {
  const config = {
    url: `${serverUrl}/api/login`,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: credentials,
  };
  return axios(config);
}

export function signup() {}
