import React, { Fragment, useState } from "react";

import { Button, Modal } from 'react-bootstrap';



const EditWish = ({ wish }) => {
  const [title, setTitle] = useState(wish.title);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const activeGuest = JSON.parse(localStorage.getItem('currentGuest'));

  //edit title function
  const updateTitle = async e => {
    e.preventDefault();

    try {
      const body = { title, activeGuest };
      const response = await fetch(
        `http://localhost:5000/wishes/${wish.wish_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      console.log(response);

    //  window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>

      <Button variant="primary" onClick={handleShow}>
        Выбираю!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Подтвержение выбора подарка</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Привет, <strong>{activeGuest.name}</strong>. Я буду безмерно счастлив получить в подарок <strong>{wish.title}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={updateTitle}>
            Ждите в гости!
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ой, я хотел выбрать другой подарок.
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default EditWish;
