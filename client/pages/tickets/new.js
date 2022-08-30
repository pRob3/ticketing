import { useState } from 'react';
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: { title, price },
    onSuccess: (ticket) => {
      console.log(ticket);
      setTitle('');
      setPrice('');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);
    if (isNaN(value)) {
      return;
    }
    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <h1>New Ticket</h1>
      <p>Create a new ticket</p>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
            id='title'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onBlur={onBlur}
            className='form-control'
            id='price'
          />
        </div>
        {errors}
        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
