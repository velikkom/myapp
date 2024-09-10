import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { UseEffect2 } from "./useeffect2";

export const UseEffect = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showComp, setShowComp] = useState(false);

  useEffect(() => {
    console.log("Mounting: Buradakiler sadece render da bir kere calışır");
  }, []);

  useEffect(() => {
    console.log("Updating:Buradaki kodlar re render da calışır ");
  });

  useEffect(() => {
    console.log(
      "Updating Da:Buradaki kodlar Dependancy arraay içindeki değişkenler in değeri değiştiğinde calışır "
    );
  }, [error, message]);

  console.log("Burası hep çalışır");

  return (
    <div className="mt-5 text-center">
      {showComp && <UseEffect2 />}

      <Button onClick={() => setMessage(Math.random())}>Set Message</Button>
      <Button onClick={() => setError(Math.random())} className="mt-3">
      
        Set Error
      </Button>
      <Button onClick={() => setShowComp((prev) => !prev)} className="mt-3">
        
        Toogle Com
      </Button>
    </div>
  );
};
