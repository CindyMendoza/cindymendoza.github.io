import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormSuccessAlert from "./success";
import FormErrorAlert from "./error";

function FormContact() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);
      fetch(
        "https://script.google.com/macros/s/AKfycbxMW1tIVex6X8_a3g-_dNV9Q6qKIsB41qp0VeKg4hU0Lf9GCPoXUvxVu0RPdDKbJfrv/exec",
        { method: "POST", body: new FormData(form) }
      )
        .then((response) => {
          if (response.status === 200) {
            setValidated(false);
            form.reset();
            ReactDOM.render(
              <FormSuccessAlert />,
              form.appendChild(document.createElement("div"))
            );
            setTimeout(() => {
              form.removeChild(form.lastElementChild);
            }, 3000);
          } else {
            setValidated(false);
            form.reset();
            ReactDOM.render(
              <FormErrorAlert />,
              form.appendChild(document.createElement("div"))
            );
            setTimeout(() => {
              form.removeChild(form.lastElementChild);
            }, 3000);
          }
        })
        .catch((error) => {
          setValidated(false);
          form.reset();
          ReactDOM.render(
            <FormErrorAlert />,
            form.appendChild(document.createElement("div"))
          );
          setTimeout(() => {
            form.removeChild(form.lastElementChild);
          }, 3000);
        });
    }
  };

  return (
    <Form
      className="mb-5"
      noValidate
      validated={validated}
      id="contactForm"
      onSubmit={handleSubmit}
      name="submit-to-google-sheet"
    >
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          id="email"
          required
        />

        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Text message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          name="message"
          id="message"
        />

        <Form.Control.Feedback type="invalid">
          Please provide a valid text.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormContact;
