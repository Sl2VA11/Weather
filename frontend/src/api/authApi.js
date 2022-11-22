import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/auth',
});



export const userRegister = async registerCredentials => {
  console.log(registerCredentials);
  const { data } = await instance.post('/users/signup', registerCredentials);
  
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;

  return data;
};

export const userLogin = async loginCredential => {
  const { data } = await instance.post('/users/login', loginCredential);
  console.log(data)
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
};

export const userLogOut = async () => {
  await instance.post('/users/logout');
};


export const getCurrentUser = async (token) => {
  try {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    const { data } = await instance.get('/users/current')
    
    return data
  } catch (error) {
    instance.defaults.headers.common.authorization = '';
    throw error;
  }
  
}

export default instance;
