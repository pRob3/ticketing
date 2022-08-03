import { useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/use-request';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
          id='email'
          aria-describedby='emailHelp'
          placeholder='Enter email'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='form-control'
          id='password'
          aria-describedby='passwordHelp'
          placeholder='Enter password'
        />
      </div>
      {errors}
      <button className='mt-2 btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default Signup;
