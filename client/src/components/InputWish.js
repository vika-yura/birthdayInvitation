import React, {Fragment, useState} from 'react';

const InputWish = () => {

  const [title, setTitle] = useState('');

  const onSubmitForm = async(e) => {
    e.preventDefault();

    try {
      const body = {title};
      const response = await fetch('http://localhost:5000/wishes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });

      window.location = '/';
      console.log(response);
    } catch(err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className='text-center mt-5'>Input Wish</h1>
      <form className='d-flex mt-5'>
        <input type="text"
               className='form-control'
               value={title}
               onChange={e => setTitle(e.target.value)}
        />
        <button
          className='btn btn-success'
          onClick={onSubmitForm}>
          Add
        </button>
      </form>
    </Fragment>
  )
};

export default InputWish;
