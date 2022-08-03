const Signup = () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-control'
          id='email'
          aria-describedby='emailHelp'
          placeholder='Enter email'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Email</label>
        <input
          type='password'
          className='form-control'
          id='password'
          aria-describedby='passwordHelp'
          placeholder='Enter email'
        />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default Signup;
