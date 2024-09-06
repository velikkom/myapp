import React from "react";
import { Button, Container } from "react-bootstrap";

export const Statesless = () => {
  let classes = "bg-dark text-light";

  const handleClasses = (mode) => {
    if (mode === "dark") {
      classes = "bg-dark text-light";
    } else {
      classes = "bg-light text-dark";
    }
  };
console.log(classes);
  return (
    <Container className={` ${classes} py-4`}>
      <h1>Dark / Light switcher</h1>
      <div className="d-flex gap-5 mt-3">
        <Button onClick={() => handleClasses("dark")}>Dark Mode</Button>
        <Button onClick={() => handleClasses("light")}>Light mode</Button>
      </div>
    </Container>
  );
};
