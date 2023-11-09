import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-bootstrap/Modal";

function FilterForm({filterForm, setfilterForm}) {  
  const {
    formState: { errors },
  } = useForm();

  useEffect(() => {}, []);

  return (
    <>
      <Modal show={filterForm} onHide={(e) => setfilterForm(false)}>
        <Modal.Body>
          <div className="row modal-login">
            <h2 onClick={() => setfilterForm(false)}> Login me in </h2>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FilterForm;
