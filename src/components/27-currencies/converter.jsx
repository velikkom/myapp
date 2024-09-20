import React, { useContext, useEffect, useState } from "react";
import { Form, FormControl, FormSelect, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";

export const Converter = () => {
  const { currencies } = useContext(StoreContext);
  const arrCurrencies = Object.keys(currencies);

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const tryVal = (amount / currencies[currency]).toFixed(2);
    setResult(tryVal);
  }, [amount, currency]);

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Type Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <FormSelect
        style={{ height: "8vh", overflow: "auto" }}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {arrCurrencies.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </FormSelect>
      <InputGroup.Text id="basic-addon1">{result}</InputGroup.Text>
    </InputGroup>
  );
};
