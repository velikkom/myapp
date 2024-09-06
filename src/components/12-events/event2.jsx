import React from "react";
import { Button, Container } from "react-bootstrap";

export const Event2 = () => {
  const handleClick = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <Container className="mt-5">
      <h1>Events</h1>
      <Button id="btn" variant="info" onClick={()=>handleClick("Veli")}>
        click Me
      </Button>
    </Container>
  );
};
