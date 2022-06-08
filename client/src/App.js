import React, {Fragment, useEffect, useState} from 'react';

import './App.css';


//components

// import InputWish from './components/InputWish';
import ListWish from './components/ListWishes';
import Greeting from './components/Greeting';

function App() {
  const [guests, setGuests] = useState([]);

  const getGuests = async() => {
    try{
      const response = await fetch('http://localhost:5000/users');
      const jsonData = await response.json();

      setGuests(jsonData);
    }catch(err) {
      console.error(err.message());
    }
  };

  useEffect(() => {
    getGuests();
  }, []);

  console.log(1,guests);

  return(
    <Fragment>
      <div className='container'>
        <ListWish guests={guests}/>
        <Greeting guests={guests}/>
      </div>
    </Fragment>
  );
}

export default App;
