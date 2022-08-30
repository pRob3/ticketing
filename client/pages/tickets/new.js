import { useState } from 'react';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

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
      <form>
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
        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
