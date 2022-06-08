import React, {Fragment, useEffect, useState} from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

function App({ guests }) {
  const [activeGuest, setActiveGuests] = useState();

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleCloseAccept() {

    //update column with user

    setShow(false);
  }

  function alertClicked(e, user) {
    e.preventDefault();

    setActiveGuests(user);
    localStorage.setItem('currentGuest', JSON.stringify(user));
  }

  return(
    <Fragment>
      <div className='container'>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Привет! С большим удовольствием хотим пригласить тебя на День рождение Артёма! :)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup defaultActiveKey="#link1">
              {
                guests.map(user => (
                  <ListGroup.Item
                    active={activeGuest && activeGuest.user_id === user.user_id}
                    action href={user.user_id}
                                  onClick={(e) => {alertClicked(e, user)}}>
                    {user.name}
                  </ListGroup.Item>
                ))
              }

            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAccept}>
              Обязательно приду! Ждите!
            </Button>
            <Button variant="primary" onClick={handleClose}>
              К сожалению, не сможем быт :(
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
}

export default App;
