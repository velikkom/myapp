import React, { useEffect } from "react";

export const UseEffect2 = () => {
  useEffect(() => {
    console.log("Mounting--2--");

    return () => {
      console.log(
        "Unmouting buradaki kodlar component Dooomdan atilmadan hemen once calışır"
      );
    };
  }, []);

  return <div>UseEffect2</div>;
};
