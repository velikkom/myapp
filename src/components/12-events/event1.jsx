import React from "react";
import { Button, Container } from "react-bootstrap";

export const Event1 = () => {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <Container className="mt-5">
      <h2>Events</h2>
      <Button id="btn" variant="info" onClick={handleClick}>
        Click Me
      </Button>
    </Container>
  );
};
