import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

export const UseRef = () => {
  const inputUserNameRef = useRef(null);

  useEffect(() => {
    const input = inputUserNameRef.current;
    input.focus();
    input.classList.add("border", "border-1", "border-primary");
  }, []);

  return (
    <Container className="mt-5">
      <FormControl
        ref={inputUserNameRef}
        placeholder="Enter Name"
        type="search"
      />
    </Container>
  );
};
